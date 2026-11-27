const fs = require("fs");

fs.mkdir("myFolder", (err) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log("Каталог создан");

    fs.rmdir("myFolder", (err) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log("Каталог удалён");
    });
});