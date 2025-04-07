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
exports.OrcamentoController = void 0;
const Orc_Service_1 = require("../../services/Orcamento/Orc_Service");
class OrcamentoController {
    static criar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const orcamentoId = yield Orc_Service_1.OrcamentoService.criarOrcamento(req.body);
                res.status(201).json({ message: 'Orçamento criado com sucesso', orcamento_id: orcamentoId });
            }
            catch (error) {
                res.status(400).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
            }
        });
    }
    static listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const orcamentos = yield Orc_Service_1.OrcamentoService.listarOrcamentos();
                res.json(orcamentos);
            }
            catch (error) {
                res.status(500).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
            }
        });
    }
    static buscarPorId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const orcamento = yield Orc_Service_1.OrcamentoService.buscarOrcamentoPorId(Number(req.params.id));
                if (!orcamento) {
                    res.status(404).json({ error: 'Orçamento não encontrado' });
                    return;
                }
                res.json(orcamento);
            }
            catch (error) {
                res.status(500).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
            }
        });
    }
    static atualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Orc_Service_1.OrcamentoService.atualizarOrcamento(Number(req.params.id), req.body);
                res.json({ message: 'Orçamento atualizado com sucesso' });
            }
            catch (error) {
                res.status(400).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
            }
        });
    }
    static deletar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Orc_Service_1.OrcamentoService.deletarOrcamento(Number(req.params.id));
                res.json({ message: 'Orçamento deletado com sucesso' });
            }
            catch (error) {
                res.status(400).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
            }
        });
    }
}
exports.OrcamentoController = OrcamentoController;
//# sourceMappingURL=Orc_Controller.js.map