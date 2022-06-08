const fs = require("fs");

let fileList = fs.readdirSync(".");
console.log(fileList);
