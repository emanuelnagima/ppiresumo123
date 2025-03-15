import express from "express";
import autenticar from "./seguranca/autenticar.js";

const porta = 3150;
const localhost = "0.0.0.0";

const app = express();

// Disponibiliza arquivos públicos
app.use(express.static('./publico'));

// Disponibiliza arquivos privados na raiz e protege com o middleware
app.use(autenticar, express.static('./privado'));

app.listen(porta, localhost, () => {
    console.log(`O servidor estará rodando em http://${localhost}:${porta}`);
});
