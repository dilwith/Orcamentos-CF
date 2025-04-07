"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors")); // Importa o middleware CORS
const routes_1 = __importDefault(require("./routes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // Carrega as variáveis de ambiente do arquivo .env
const app = (0, express_1.default)();
const PORT = 3000;
// Middleware para parsear JSON
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: 'http://localhost:5173', // Permite requisições do frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos HTTP permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
}));
app.use('/api', routes_1.default);
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
//# sourceMappingURL=index.js.map