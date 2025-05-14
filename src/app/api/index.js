import express from "express";
import cors from "cors";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;


app.use(cors());


app.use(express.json());


app.use('/img', (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
}, express.static(join(__dirname, 'public', 'img')));


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


const mercados = [
  { nome: "mercado1", multiplicador: 1.2 },
  { nome: "mercado2", multiplicador: 1.5 },
  { nome: "mercado3", multiplicador: 1.8 }
];

app.get('/mercados', (req, res) => {
  res.json(mercados);
});



app.listen(PORT, () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
});
