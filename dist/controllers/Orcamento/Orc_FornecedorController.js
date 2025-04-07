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
exports.OrcamentoFornecedorController = void 0;
const Orc_FornecedorService_1 = require("../../services/Orcamento/Orc_FornecedorService");
class OrcamentoFornecedorController {
    static listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const fornecedores = yield Orc_FornecedorService_1.OrcamentoFornecedorService.listarOrcamentoFornecedores();
                res.json(fornecedores);
            }
            catch (error) {
                res.status(500).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
            }
        });
    }
    static criar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = yield Orc_FornecedorService_1.OrcamentoFornecedorService.criarOrcamentoFornecedor(req.body);
                res.status(201).json({ message: 'OrçamentoFornecedor criado com sucesso', id });
            }
            catch (error) {
                res.status(400).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
            }
        });
    }
    static deletar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Orc_FornecedorService_1.OrcamentoFornecedorService.deletarOrcamentoFornecedor(Number(req.params.id));
                res.json({ message: 'OrçamentoFornecedor deletado com sucesso' });
            }
            catch (error) {
                res.status(400).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
            }
        });
    }
    static listarComNomeFornecedor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const orcamentos = yield Orc_FornecedorService_1.OrcamentoFornecedorService.listarComNomeFornecedor();
                res.json(orcamentos);
            }
            catch (error) {
                res.status(500).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
            }
        });
    }
}
exports.OrcamentoFornecedorController = OrcamentoFornecedorController;
//# sourceMappingURL=Orc_FornecedorController.js.map