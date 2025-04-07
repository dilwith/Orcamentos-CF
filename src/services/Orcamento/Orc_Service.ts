// src/services/OrcamentoService.ts
import { OrcamentoModel, Orcamento } from '../../models/Orcamento/Orc_Model';

export class OrcamentoService {
  
  static async criarOrcamento(data: Orcamento): Promise<number> {
    if (!data.usuario_id || !data.objetivo) {
      throw new Error('Os campos usuario_id e objetivo são obrigatórios');
    }

    return OrcamentoModel.create(data);
  }
  static async buscarOrcamentoPorId(orcamento_id: number): Promise<Orcamento | null> {
    return OrcamentoModel.findById(orcamento_id);
  }

  static async atualizarOrcamento(orcamento_id: number, data: Orcamento): Promise<void> {
    if (!data.objetivo) {
      throw new Error('O campo objetivo é obrigatório');
    }

    await OrcamentoModel.update(orcamento_id, data);
  }

  static async deletarOrcamento(orcamento_id: number): Promise<void> {
    const orcamento = await OrcamentoModel.findById(orcamento_id);
    if (!orcamento) {
      throw new Error('Orçamento não encontrado');
    }

    await OrcamentoModel.delete(orcamento_id);
  }
  static async listarOrcamentos(): Promise<Orcamento[]> {
    return OrcamentoModel.getAll();
  }
}