import db from "./db.js";

const sql = `
    CREATE TABLE IF NOT EXISTS products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(200) NOT NULL,
        price DECIMAL(10, 2) NOT NULL
    )
`;

db.query(sql, (err) => {
    if (err) {
        console.error("Ошибка создания таблицы:", err.message);
        process.exitCode = 1;
    } else {
        console.log("Таблица products успешно создана");
    }

    db.end();
});