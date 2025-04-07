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
exports.FornecedorController = void 0;
const FornecedorService_1 = require("../services/FornecedorService");
class FornecedorController {
    static listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const fornecedores = yield FornecedorService_1.FornecedorService.listarFornecedores();
                res.json(fornecedores);
            }
            catch (error) {
                res.status(500).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
            }
        });
    }
    static buscarPorId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const fornecedor = yield FornecedorService_1.FornecedorService.buscarFornecedorPorId(Number(req.params.id));
                if (!fornecedor) {
                    res.status(404).json({ error: 'Fornecedor não encontrado' });
                    return;
                }
                res.json(fornecedor);
            }
            catch (error) {
                res.status(500).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
            }
        });
    }
    static criar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield FornecedorService_1.FornecedorService.criarFornecedor(req.body);
                res.status(201).json({ message: 'Fornecedor criado com sucesso' });
            }
            catch (error) {
                res.status(400).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
            }
        });
    }
    static atualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield FornecedorService_1.FornecedorService.atualizarFornecedor(Number(req.params.id), req.body);
                res.json({ message: 'Fornecedor atualizado com sucesso' });
            }
            catch (error) {
                res.status(400).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
            }
        });
    }
    static deletar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield FornecedorService_1.FornecedorService.deletarFornecedor(Number(req.params.id));
                res.json({ message: 'Fornecedor deletado com sucesso' });
            }
            catch (error) {
                res.status(400).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
            }
        });
    }
}
exports.FornecedorController = FornecedorController;
//# sourceMappingURL=FornecedorController.js.map