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
exports.FornecedorModel = void 0;
// src/models/FornecedorModel.ts
const database_1 = require("../config/database");
class FornecedorModel {
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield database_1.db.query('SELECT * FROM fornecedores');
            return rows;
        });
    }
    static findById(fornecedor_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield database_1.db.query('SELECT * FROM fornecedores WHERE fornecedor_id = ?', [fornecedor_id]);
            return rows.length > 0 ? rows[0] : null;
        });
    }
    static findByCnpj(cnpj) {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield database_1.db.query('SELECT * FROM fornecedores WHERE cnpj = ?', [cnpj]);
            return rows.length > 0 ? rows[0] : null;
        });
    }
    static create(fornecedor) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.query('INSERT INTO fornecedores (nome, email, telefone, cnpj) VALUES (?, ?, ?, ?)', [fornecedor.nome, fornecedor.email, fornecedor.telefone, fornecedor.cnpj]);
        });
    }
    static update(fornecedor_id, fornecedor) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.query('UPDATE fornecedores SET nome = ?, email = ?, telefone = ?, cnpj = ? WHERE fornecedor_id = ?', [fornecedor.nome, fornecedor.email, fornecedor.telefone, fornecedor.cnpj, fornecedor_id]);
        });
    }
    static delete(fornecedor_id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.query('DELETE FROM fornecedores WHERE fornecedor_id = ?', [fornecedor_id]);
        });
    }
}
exports.FornecedorModel = FornecedorModel;
//# sourceMappingURL=FornecedorModel.js.map