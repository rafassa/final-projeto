import express from "express";
import cors from "cors";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

// CORS para permitir imagens no navegador
app.use(cors());

// Servir imagens estaticamente
app.use('/img', (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
}, express.static(join(__dirname, 'public', 'img')));

// Dados simulados
const resposta = [
  {
    nome: "macarrão",
    preco: 5,
    quantidade: 1,
    img: "http://localhost:3000/img/macarrao.png"
  },
  {
    nome: "feijão",
    preco: 6,
    quantidade: 1,
    img: "http://localhost:3000/img/feijao.png"
  },
  {
    nome: "arroz",
    preco: 8,
    quantidade: 1,
    img: "http://localhost:3000/img/arroz.png"
  }
];

app.get("/", (req, res) => {
  res.json(resposta);
});

app.listen(PORT, () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
  console.log(`✅ Acesse: http://localhost:${PORT}/img/arroz.png`);
});
