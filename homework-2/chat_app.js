const EventEmitter = require("events");

const chat = new EventEmitter();

function sendMessage(username, message, emitter) {
    emitter.emit("message", username, message);
}

chat.on("message", (username, message) => {
    console.log(`${username}: ${message}`);
});

sendMessage("Anton", "Привет!", chat);
sendMessage("Andrey", "Привет, Anton!", chat);
sendMessage("Max", "Как дела?", chat);
sendMessage("Yulia", "Всё хорошо!", chat);