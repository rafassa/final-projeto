import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors()); // Permite requisições de outras origens

const resposta = [
    { nome: "macarrão", preco: 5, quantidade: 1 },
    { nome: "feijão", preco: 5, quantidade: 1 },
    { nome: "arroz", preco: 5, quantidade: 1 },
];

app.get("/", (req, res) => {
    res.json(resposta);
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
