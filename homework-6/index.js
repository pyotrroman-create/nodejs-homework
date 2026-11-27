import express from "express";
import db from "./db.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.post("/", (req, res) => {
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({
            error: "Данные не были отправлены"
        });
    }

    res.json({
        message: "Данные получены",
        data: req.body
    });
});

app.get("/products", (req, res) => {
    db.query("SELECT * FROM products", (err, results) => {
        if (err) {
            return res.status(500).json({
                error: "Ошибка получения продуктов"
            });
        }

        res.json(results);
    });
});

app.post("/products", (req, res) => {
    const { name, price } = req.body || {};

    if (!name || price == null) {
        return res.status(400).json({
            error: "Укажите название и цену продукта"
        });
    }

    const sql = "INSERT INTO products (name, price) VALUES (?, ?)";

    db.execute(sql, [name, price], (err, result) => {
        if (err) {
            return res.status(500).json({
                error: "Ошибка добавления продукта"
            });
        }

        res.status(201).json({
            message: "Продукт успешно добавлен",
            id: result.insertId
        });
    });
});

app.use((req, res) => {
    res.status(404).json({
        error: "Маршрут не найден"
    });
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});