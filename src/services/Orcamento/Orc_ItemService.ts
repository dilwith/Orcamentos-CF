// src/services/OrcamentoItemService.ts
import { OrcamentoItemModel, OrcamentoItem } from '../../models/Orcamento/Orc_ItemModel';

export class OrcamentoItemService {
  static async criarOrcamentoItens(data: OrcamentoItem[]): Promise<void> {
    if (!data.length) {
      throw new Error('A lista de itens não pode estar vazia');
    }

    await OrcamentoItemModel.create(data);
  }
  static async deletarOrcamentoItem(orcamentoItens_id: number): Promise<void> {
    await OrcamentoItemModel.delete(orcamentoItens_id);
  }
  static async listarTodosItens(): Promise<OrcamentoItem[]> {
    return OrcamentoItemModel.getAll();
  }

  static async buscarItensPorFornecedor(orcamentoFornecedores_id: number): Promise<OrcamentoItem[]> {
    return OrcamentoItemModel.findByFornecedorId(orcamentoFornecedores_id);
  }

  static async buscarPorId(orcamentoItens_id: number): Promise<OrcamentoItem | null> {
    return OrcamentoItemModel.findById(orcamentoItens_id);
  }

  static async atualizarOrcamentoItem(orcamentoItens_id: number, data: Partial<OrcamentoItem>): Promise<void> {
    const item = await OrcamentoItemModel.findById(orcamentoItens_id);
    if (!item) {
      throw new Error('OrçamentoItem não encontrado');
    }

    await OrcamentoItemModel.update(orcamentoItens_id, data);
  }
}