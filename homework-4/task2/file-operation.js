const fs = require("fs");
const dotenv = require("dotenv");

dotenv.config();

const filename = process.env.FILENAME;

fs.writeFile(filename, "Здравствуйте, Астемир!", (err) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log("Файл записан");

    fs.readFile(filename, "utf8", (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log(data);
    });
});