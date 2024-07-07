// 4. Use Node.js's fs module to write a file asynchronously `fs.writeFile`. Write a function that takes a file path and a callback. Use the callback to write the contents of the file to the file path.

const fs = require("fs");

const writeFile = (filePath, content, callback) => {
    fs.writeFile(filePath, content, "utf8", (err) => {
        if (err) {
            callback(err);
            return;
        }
        callback(null);
    });
};

const filePath = "./file/mrWF.txt";
const content = "Hello THIS IS MR WF";

writeFile(filePath, content, (err) => {
    if (err) {
        console.log("ERRR", err);
        return;
    }
    console.log("Write !!!");
});
