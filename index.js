import express from "express";


const porta = 3700;
const localhost = "0.0.0.0"; //define nosso app disponivel em todas interfaces de rede desse pc
 
const app = express();
app.listen(porta, localhost, () => {
    console.log(`O servidor estará rodando em http://${localhost}:${porta}`);
})
