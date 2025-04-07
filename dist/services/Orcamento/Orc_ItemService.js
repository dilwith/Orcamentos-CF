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
exports.OrcamentoItemService = void 0;
// src/services/OrcamentoItemService.ts
const Orc_ItemModel_1 = require("../../models/Orcamento/Orc_ItemModel");
class OrcamentoItemService {
    static criarOrcamentoItens(data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!data.length) {
                throw new Error('A lista de itens não pode estar vazia');
            }
            yield Orc_ItemModel_1.OrcamentoItemModel.create(data);
        });
    }
    static deletarOrcamentoItem(orcamentoItens_id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Orc_ItemModel_1.OrcamentoItemModel.delete(orcamentoItens_id);
        });
    }
    static listarTodosItens() {
        return __awaiter(this, void 0, void 0, function* () {
            return Orc_ItemModel_1.OrcamentoItemModel.getAll();
        });
    }
    static buscarItensPorFornecedor(orcamentoFornecedores_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return Orc_ItemModel_1.OrcamentoItemModel.findByFornecedorId(orcamentoFornecedores_id);
        });
    }
}
exports.OrcamentoItemService = OrcamentoItemService;
//# sourceMappingURL=Orc_ItemService.js.map