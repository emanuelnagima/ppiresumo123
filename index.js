import express from "express";

const porta = 3600;
const localhost = "0.0.0.0"; // define nosso app disponível em todas interfaces de rede desse PC

const app = express(); // Inicializa o app primeiro!

// Prepara o servidor
app.use(express.static("./publico"));

app.listen(porta, localhost, () => {
    console.log(`O servidor estará rodando em http://${localhost}:${porta}`);
});
