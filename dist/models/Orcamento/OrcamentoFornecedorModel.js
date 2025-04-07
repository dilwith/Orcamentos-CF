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
exports.OrcamentoFornecedorModel = void 0;
// src/models/OrcamentoFornecedorModel.ts
const database_1 = require("../../config/database");
class OrcamentoFornecedorModel {
    static create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const [result] = yield database_1.db.query('INSERT INTO orcamentoFornecedores (orcamento_id, fornecedor_id, data_envio) VALUES (?, ?, NOW())', [data.orcamento_id, data.fornecedor_id]);
            return result.insertId; // Retorna o ID do orçamentoFornecedor criado
        });
    }
}
exports.OrcamentoFornecedorModel = OrcamentoFornecedorModel;
//# sourceMappingURL=OrcamentoFornecedorModel.js.map