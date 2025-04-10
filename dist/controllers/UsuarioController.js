"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const UsuarioService_1 = require("../services/UsuarioService");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET || 'chave_secreta_super_segura';
class UsuarioController {
    static listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuarios = yield UsuarioService_1.UsuarioService.listarUsuarios();
                // Remove o campo 'senha' de cada usuário
                const usuariosSemSenha = usuarios.map(usuario => {
                    const { senha } = usuario, usuarioSemSenha = __rest(usuario, ["senha"]);
                    return usuarioSemSenha;
                });
                res.json(usuariosSemSenha);
            }
            catch (error) {
                res.status(500).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
            }
        });
    }
    static criar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield UsuarioService_1.UsuarioService.criarUsuario(req.body);
                res.status(201).json({ message: 'Usuário criado com sucesso' });
            }
            catch (error) {
                res.status(400).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
            }
        });
    }
    static login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, senha } = req.body;
                const usuario = yield UsuarioService_1.UsuarioService.autenticarUsuario(email, senha);
                // Gerar o token JWT
                const token = jsonwebtoken_1.default.sign({ usuario_id: usuario === null || usuario === void 0 ? void 0 : usuario.usuario_id, email: usuario === null || usuario === void 0 ? void 0 : usuario.email }, JWT_SECRET, { expiresIn: '1h' });
                res.json({ token });
            }
            catch (error) {
                res.status(401).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
            }
        });
    }
    static buscarPorId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuario = yield UsuarioService_1.UsuarioService.buscarUsuarioPorId(Number(req.params.id));
                if (!usuario) {
                    res.status(404).json({ error: 'Usuário não encontrado' });
                    return;
                }
                res.json(usuario);
            }
            catch (error) {
                res.status(500).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
            }
        });
    }
    static atualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield UsuarioService_1.UsuarioService.atualizarUsuario(Number(req.params.id), req.body);
                res.json({ message: 'Usuário atualizado com sucesso' });
            }
            catch (error) {
                res.status(400).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
            }
        });
    }
    static deletar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield UsuarioService_1.UsuarioService.deletarUsuario(Number(req.params.id));
                res.json({ message: 'Usuário deletado com sucesso' });
            }
            catch (error) {
                res.status(400).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
            }
        });
    }
}
exports.UsuarioController = UsuarioController;
//# sourceMappingURL=UsuarioController.js.map