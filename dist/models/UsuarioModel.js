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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioModel = void 0;
// src/models/UsuarioModel.ts
const database_1 = require("../config/database");
class UsuarioModel {
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield database_1.db.query('SELECT * FROM usuario');
            return rows;
        });
    }
    static create(usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.query('INSERT INTO usuario (nome, email, senha) VALUES (?, ?, ?)', [usuario.nome, usuario.email, usuario.senha]);
        });
    }
    static findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield database_1.db.query('SELECT * FROM usuario WHERE email = ?', [email]);
            return rows.length > 0 ? rows[0] : null;
        });
    }
    static findById(usuario_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield database_1.db.query('SELECT * FROM usuario WHERE usuario_id = ?', [usuario_id]);
            return rows.length > 0 ? rows[0] : null;
        });
    }
    static update(usuario_id, usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.query('UPDATE usuario SET nome = ?, email = ?, senha = ? WHERE usuario_id = ?', [usuario.nome, usuario.email, usuario.senha, usuario_id]);
        });
    }
    static delete(usuario_id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.query('DELETE FROM usuario WHERE usuario_id = ?', [usuario_id]);
        });
    }
}
exports.UsuarioModel = UsuarioModel;
//# sourceMappingURL=UsuarioModel.js.map