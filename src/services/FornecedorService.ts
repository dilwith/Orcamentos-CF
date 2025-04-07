// src/services/FornecedorService.ts
import { FornecedorModel, Fornecedor } from '../models/FornecedorModel';

export class FornecedorService {
  static async listarFornecedores(): Promise<Fornecedor[]> {
    return FornecedorModel.getAll();
  }

  static async buscarFornecedorPorId(fornecedor_id: number): Promise<Fornecedor | null> {
    return FornecedorModel.findById(fornecedor_id);
  }

  static async criarFornecedor(data: Fornecedor): Promise<void> {
    if (!data.nome || !data.email || !data.telefone || !data.cnpj) {
      throw new Error('Todos os campos (nome, email, telefone, cnpj) são obrigatórios');
    }

    const existingFornecedor = await FornecedorModel.findByCnpj(data.cnpj);
    if (existingFornecedor) {
      throw new Error('CNPJ já cadastrado');
    }

    await FornecedorModel.create(data);
  }

  static async atualizarFornecedor(fornecedor_id: number, data: Fornecedor): Promise<void> {
    if (!data.nome || !data.email || !data.telefone || !data.cnpj) {
      throw new Error('Todos os campos (nome, email, telefone, cnpj) são obrigatórios');
    }

    const existingFornecedor = await FornecedorModel.findByCnpj(data.cnpj);
    if (existingFornecedor && existingFornecedor.fornecedor_id !== fornecedor_id) {
      throw new Error('CNPJ já cadastrado por outro fornecedor');
    }

    await FornecedorModel.update(fornecedor_id, data);
  }

  static async deletarFornecedor(fornecedor_id: number): Promise<void> {
    const fornecedor = await FornecedorModel.findById(fornecedor_id);
    if (!fornecedor) {
      throw new Error('Fornecedor não encontrado');
    }

    await FornecedorModel.delete(fornecedor_id);
  }
}