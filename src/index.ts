import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit'; // Importa o rate limiter
import router from './routes';
import dotenv from 'dotenv';

dotenv.config(); // Carrega as variáveis de ambiente do arquivo .env

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Configuração do rate limiter
const limiter = rateLimit({
  windowMs: 7 * 60 * 1000, // 15 minutos
  max: 100, // Limite de 100 requisições por IP
  message: 'Muitas requisições vindas deste IP, tente novamente mais tarde.',
});

// Aplica o rate limiter globalmente
app.use(limiter);

// Configuração do CORS
app.use(cors({
  origin: 'http://localhost:5173', // Permite requisições do frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos HTTP permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
}));

// Rotas
app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});