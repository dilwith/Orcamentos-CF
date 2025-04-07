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
exports.OrcamentoModel = void 0;
// src/models/OrcamentoModel.ts
const database_1 = require("../../config/database");
class OrcamentoModel {
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield database_1.db.query('SELECT * FROM orcamento');
            return rows;
        });
    }
    static create(orcamento) {
        return __awaiter(this, void 0, void 0, function* () {
            const [result] = yield database_1.db.query('INSERT INTO orcamento (usuario_id, objetivo) VALUES (?, ?)', [orcamento.usuario_id, orcamento.objetivo]);
            return result.insertId; // Retorna o ID do orçamento criado
        });
    }
    static findById(orcamento_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield database_1.db.query('SELECT * FROM orcamento WHERE orcamento_id = ?', [orcamento_id]);
            return rows.length > 0 ? rows[0] : null;
        });
    }
    static update(orcamento_id, orcamento) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.query('UPDATE orcamento SET objetivo = ? WHERE orcamento_id = ?', [orcamento.objetivo, orcamento_id]);
        });
    }
    static delete(orcamento_id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.query('DELETE FROM orcamento WHERE orcamento_id = ?', [orcamento_id]);
        });
    }
}
exports.OrcamentoModel = OrcamentoModel;
//# sourceMappingURL=Orc_Model.js.map