const fs = require("fs");

fs.writeFile("info.txt", "Node.js is awesome!", (err) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log("Файл записан");

    fs.readFile("info.txt", "utf8", (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log(data);
    });
});