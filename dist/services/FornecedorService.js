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
exports.FornecedorService = void 0;
// src/services/FornecedorService.ts
const FornecedorModel_1 = require("../models/FornecedorModel");
class FornecedorService {
    static listarFornecedores() {
        return __awaiter(this, void 0, void 0, function* () {
            return FornecedorModel_1.FornecedorModel.getAll();
        });
    }
    static buscarFornecedorPorId(fornecedor_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return FornecedorModel_1.FornecedorModel.findById(fornecedor_id);
        });
    }
    static criarFornecedor(data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!data.nome || !data.email || !data.telefone || !data.cnpj) {
                throw new Error('Todos os campos (nome, email, telefone, cnpj) são obrigatórios');
            }
            const existingFornecedor = yield FornecedorModel_1.FornecedorModel.findByCnpj(data.cnpj);
            if (existingFornecedor) {
                throw new Error('CNPJ já cadastrado');
            }
            yield FornecedorModel_1.FornecedorModel.create(data);
        });
    }
    static atualizarFornecedor(fornecedor_id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!data.nome || !data.email || !data.telefone || !data.cnpj) {
                throw new Error('Todos os campos (nome, email, telefone, cnpj) são obrigatórios');
            }
            const existingFornecedor = yield FornecedorModel_1.FornecedorModel.findByCnpj(data.cnpj);
            if (existingFornecedor && existingFornecedor.fornecedor_id !== fornecedor_id) {
                throw new Error('CNPJ já cadastrado por outro fornecedor');
            }
            yield FornecedorModel_1.FornecedorModel.update(fornecedor_id, data);
        });
    }
    static deletarFornecedor(fornecedor_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const fornecedor = yield FornecedorModel_1.FornecedorModel.findById(fornecedor_id);
            if (!fornecedor) {
                throw new Error('Fornecedor não encontrado');
            }
            yield FornecedorModel_1.FornecedorModel.delete(fornecedor_id);
        });
    }
}
exports.FornecedorService = FornecedorService;
//# sourceMappingURL=FornecedorService.js.map