// src/services/OrcamentoFornecedorService.ts
import { OrcamentoFornecedorModel, OrcamentoFornecedor , OrcamentoFornecedorDetalhado } from '../../models/Orcamento/Orc_FornecedorModel';

export class OrcamentoFornecedorService {
  static async listarOrcamentoFornecedores(): Promise<OrcamentoFornecedor[]> {
    return OrcamentoFornecedorModel.getAll();
  }

  static async criarOrcamentoFornecedor(data: OrcamentoFornecedor): Promise<number> {
    if (!data.orcamento_id || !data.fornecedor_id) {
      throw new Error('Os campos orcamento_id e fornecedor_id são obrigatórios');
    }

    return OrcamentoFornecedorModel.create(data);
  }

  static async deletarOrcamentoFornecedor(orcamentoFornecedores_id: number): Promise<void> {
    const fornecedor = await OrcamentoFornecedorModel.findById(orcamentoFornecedores_id);
    if (!fornecedor) {
      throw new Error('OrçamentoFornecedor não encontrado');
    }

    await OrcamentoFornecedorModel.delete(orcamentoFornecedores_id);
  }

  static async listarComNomeFornecedor(): Promise<OrcamentoFornecedorDetalhado[]> {
    return OrcamentoFornecedorModel.listarComNomeFornecedor();
  }
  static async atualizarOrcamentoFornecedor(orcamentoFornecedores_id: number, data: Partial<OrcamentoFornecedor>): Promise<void> {
    const fornecedor = await OrcamentoFornecedorModel.findById(orcamentoFornecedores_id);
    if (!fornecedor) {
      throw new Error('OrçamentoFornecedor não encontrado');
    }

    await OrcamentoFornecedorModel.update(orcamentoFornecedores_id, data);
  }
}