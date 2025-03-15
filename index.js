import express from "express";
import autenticar from "./seguranca/autenticar.js";


const porta = 3600;
const localhost = "0.0.0.0"; // define nosso app disponível em todas interfaces de rede desse PC

const app = express(); // Inicializa o app primeiro!





// Prepara o servidor
// disponibilizando arquivos p/ acessar na web http://localhost:3600/index.html
app.use(express.static("./publico"));

//disponibilizando arquivos p/ privados na web
app.use(express.static("./privado"));

app.listen(porta, localhost, () => {
    console.log(`O servidor estará rodando em http://${localhost}:${porta}`);
});
