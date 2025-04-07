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
exports.OrcamentoItemController = void 0;
const Orc_ItemService_1 = require("../../services/Orcamento/Orc_ItemService");
class OrcamentoItemController {
    static criar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Orc_ItemService_1.OrcamentoItemService.criarOrcamentoItens(req.body);
                res.status(201).json({ message: 'Itens do orçamento criados com sucesso' });
            }
            catch (error) {
                res.status(400).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
            }
        });
    }
    static deletar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Orc_ItemService_1.OrcamentoItemService.deletarOrcamentoItem(Number(req.params.id));
                res.json({ message: 'Item do orçamento deletado com sucesso' });
            }
            catch (error) {
                res.status(400).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
            }
        });
    }
    static listarTodos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const itens = yield Orc_ItemService_1.OrcamentoItemService.listarTodosItens();
                res.json(itens);
            }
            catch (error) {
                res.status(500).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
            }
        });
    }
    static buscarPorFornecedor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const itens = yield Orc_ItemService_1.OrcamentoItemService.buscarItensPorFornecedor(Number(req.params.fornecedor_id));
                res.json(itens);
            }
            catch (error) {
                res.status(500).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
            }
        });
    }
}
exports.OrcamentoItemController = OrcamentoItemController;
//# sourceMappingURL=Orc_ItemController.js.map