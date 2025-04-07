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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioService = void 0;
const UsuarioModel_1 = require("../models/UsuarioModel");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class UsuarioService {
    static listarUsuarios() {
        return __awaiter(this, void 0, void 0, function* () {
            return UsuarioModel_1.UsuarioModel.getAll();
        });
    }
    static criarUsuario(data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!data.nome || !data.email || !data.senha) {
                throw new Error('Nome, email e senha são obrigatórios');
            }
            if (data.senha.length < 5) {
                throw new Error('A senha deve ter no mínimo 5 caracteres');
            }
            const existingUser = yield UsuarioModel_1.UsuarioModel.findByEmail(data.email);
            if (existingUser) {
                throw new Error('Email já cadastrado');
            }
            // Criptografar a senha antes de salvar
            const senhaCriptografada = yield bcryptjs_1.default.hash(data.senha, 10);
            data.senha = senhaCriptografada;
            yield UsuarioModel_1.UsuarioModel.create(data);
        });
    }
    static autenticarUsuario(email, senha) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = yield UsuarioModel_1.UsuarioModel.findByEmail(email);
            if (!usuario) {
                throw new Error('Usuário não encontrado');
            }
            // Verificar a senha
            const senhaValida = yield bcryptjs_1.default.compare(senha, usuario.senha);
            if (!senhaValida) {
                throw new Error('Senha incorreta');
            }
            return usuario;
        });
    }
    static buscarUsuarioPorId(usuario_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return UsuarioModel_1.UsuarioModel.findById(usuario_id);
        });
    }
    static atualizarUsuario(usuario_id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!data.nome || !data.email || !data.senha) {
                throw new Error('Os campos nome, email e senha são obrigatórios');
            }
            yield UsuarioModel_1.UsuarioModel.update(usuario_id, data);
        });
    }
    static deletarUsuario(usuario_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = yield UsuarioModel_1.UsuarioModel.findById(usuario_id);
            if (!usuario) {
                throw new Error('Usuário não encontrado');
            }
            yield UsuarioModel_1.UsuarioModel.delete(usuario_id);
        });
    }
}
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=UsuarioService.js.map