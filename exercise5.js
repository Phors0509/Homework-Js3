// 5. Use the example 3 & 4, write in the below scenario:
// Read the context of `input.txt`
// Append “First modification” to the content and write it to `output1.txt`
// Read `output1.txt` and append “SEcond modification” to the file `output2.txt`
// Finally read `output2.txt` and print to the console

const { rejects } = require("assert");
const fs = require("fs");

const readFileAsync = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, "uft8", (data, err) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
};

const writeFileAsync = (filePath, content) => {
    return new Promise((resolve, rejects) => {
        fs.writeFile(filePath, content, "uft8", (err) => {
            if (err) {
                rejects(err);
            }
            resolve(null);
        });
    });
};

const filePath = "./file/output.txt";
const content = "Input1!!";

const processFile = async () => {
    try {
        const inputContent = await readFile(filePath);
    } catch {
        console.log("errr");
    }
};

processFile();
