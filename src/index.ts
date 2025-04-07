import express from 'express';
import cors from 'cors'; // Importa o middleware CORS
import router from './routes';
import dotenv from 'dotenv';
dotenv.config(); // Carrega as variáveis de ambiente do arquivo .env


const app = express();
const PORT = 3000;
// Middleware para parsear JSON
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173', // Permite requisições do frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos HTTP permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
}));

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});