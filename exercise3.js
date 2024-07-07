// 3. Use Node.js's fs module to read a file asynchronously:`fs.readFile`. Write a function that takes a file path and a callback. Use the callback to print the contents of the file to the console.
// const fs = require("fs");
// const filePath = "./file/hello.txt";
// const readFile = (filePath, callback) => {
//     fs.readFile(filePath, "utf8", (data, err) => {
//         if (err) {
//             callback(err);
//             return;
//         }
//         callback(data);
//     });
// };

// readFile(filePath, (data, err) => {
//     if (err) {
//         console.log("Err", err);
//         return;
//     }
//     console.log("YOOOO", data);
// });
