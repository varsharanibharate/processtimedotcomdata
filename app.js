const express = require("express");
const app = express();

const req = require("request");

/* In this method, timedata is processes */
function processTimeWebData(callback) {
  req("https://time.com/getTimeStories", function (error, response, body) {
    var subStrRes = body.match(
      /\"most_popular_stories\":(.+),\"activate_countdown_clock/
    );

    var finalResponse = getFinalJson(JSON.parse(subStrRes[1]));

    console.log("Final Json Object: ", finalResponse);

    return callback(finalResponse);
  });
}

/**
 * In this method processing received data from web page and returning the expected json object.
 */
function getFinalJson(jsonArray) {
  var jsArray = [];
  jsonArray.forEach((element) => {
    jsArray.push({ title: element.title, link: element.url });
  });

  var finalJson = JSON.stringify(jsArray);
  return finalJson;
}

app.listen(8080, () => console.log("Server Running at http://localhost:8080"));

app.get("/getTimeStories", function (req, res) {
  processTimeWebData(function (output1) {
    console.log("Output:=> ", output1);
    res.header("Content-Type", "application/json").send(output1);
  });
});
