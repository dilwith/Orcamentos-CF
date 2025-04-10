"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit")); // Importa o rate limiter
const routes_1 = __importDefault(require("./routes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // Carrega as variáveis de ambiente do arquivo .env
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middleware para parsear JSON
app.use(express_1.default.json());
// Configuração do rate limiter
const limiter = (0, express_rate_limit_1.default)({
    windowMs: 7 * 60 * 1000, // 15 minutos
    max: 100, // Limite de 100 requisições por IP
    message: 'Muitas requisições vindas deste IP, tente novamente mais tarde.',
});
// Aplica o rate limiter globalmente
app.use(limiter);
// Configuração do CORS
app.use((0, cors_1.default)({
    origin: 'http://localhost:5173', // Permite requisições do frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos HTTP permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
}));
// Rotas
app.use('/api', routes_1.default);
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
//# sourceMappingURL=index.js.map