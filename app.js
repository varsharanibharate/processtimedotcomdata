const express = require("express");
const app = express();

const req = require("request");
const fs = require("fs");

/* In this method, timedata is processes */
function processTimeWebData() {
  req("https://time.com/getTimeStories", function (error, response, body) {
    console.log("error:", error);
    console.log("statusCode:", response && response.statusCode);
    console.log(h3);

    /* I am still working on parsing the html data */
  });
}

app.get("/getTimeStories", function (req, res) {
  processTimeWebData();
});

app.listen(3000, () => console.log("Server Running at http://localhost:3000"));
