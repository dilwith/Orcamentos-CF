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
exports.OrcamentoItemModel = void 0;
// src/models/OrcamentoItemModel.ts
const database_1 = require("../../config/database");
class OrcamentoItemModel {
    static create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const values = data.map(item => [
                item.orcamentoFornecedores_id,
                item.item_id,
                item.quantidade,
                item.marca,
                item.valor_unitario
            ]);
            yield database_1.db.query('INSERT INTO orcamentoItens (orcamentoFornecedores_id, item_id, quantidade, marca, valor_unitario) VALUES ?', [values]);
        });
    }
    static delete(orcamentoItens_id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.query('DELETE FROM orcamentoItens WHERE orcamentoItens_id = ?', [orcamentoItens_id]);
        });
    }
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield database_1.db.query('SELECT * FROM orcamentoItens');
            return rows;
        });
    }
    static findByFornecedorId(orcamentoFornecedores_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield database_1.db.query('SELECT * FROM orcamentoItens WHERE orcamentoFornecedores_id = ?', [orcamentoFornecedores_id]);
            return rows;
        });
    }
}
exports.OrcamentoItemModel = OrcamentoItemModel;
//# sourceMappingURL=Orc_ItemModel.js.map