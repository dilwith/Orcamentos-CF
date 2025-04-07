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
exports.OrcamentoFornecedorService = void 0;
// src/services/OrcamentoFornecedorService.ts
const Orc_FornecedorModel_1 = require("../../models/Orcamento/Orc_FornecedorModel");
class OrcamentoFornecedorService {
    static listarOrcamentoFornecedores() {
        return __awaiter(this, void 0, void 0, function* () {
            return Orc_FornecedorModel_1.OrcamentoFornecedorModel.getAll();
        });
    }
    static criarOrcamentoFornecedor(data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!data.orcamento_id || !data.fornecedor_id) {
                throw new Error('Os campos orcamento_id e fornecedor_id são obrigatórios');
            }
            return Orc_FornecedorModel_1.OrcamentoFornecedorModel.create(data);
        });
    }
    static deletarOrcamentoFornecedor(orcamentoFornecedores_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const fornecedor = yield Orc_FornecedorModel_1.OrcamentoFornecedorModel.findById(orcamentoFornecedores_id);
            if (!fornecedor) {
                throw new Error('OrçamentoFornecedor não encontrado');
            }
            yield Orc_FornecedorModel_1.OrcamentoFornecedorModel.delete(orcamentoFornecedores_id);
        });
    }
    static listarComNomeFornecedor() {
        return __awaiter(this, void 0, void 0, function* () {
            return Orc_FornecedorModel_1.OrcamentoFornecedorModel.listarComNomeFornecedor();
        });
    }
}
exports.OrcamentoFornecedorService = OrcamentoFornecedorService;
//# sourceMappingURL=Orc_FornecedorService.js.map