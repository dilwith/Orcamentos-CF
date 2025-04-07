// src/controllers/OrcamentoController.ts
import { Request, Response } from 'express';
import { OrcamentoService } from '../../services/Orcamento/Orc_Service';

export class OrcamentoController {
  static async criar(req: Request, res: Response): Promise<void> {
    try {
      const orcamentoId = await OrcamentoService.criarOrcamento(req.body);
      res.status(201).json({ message: 'Orçamento criado com sucesso', orcamento_id: orcamentoId });
    } catch (error) {
      res.status(400).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
    }
  }
  static async listar(req: Request, res: Response): Promise<void> {
    try {
      const orcamentos = await OrcamentoService.listarOrcamentos();
      res.json(orcamentos);
    } catch (error) {
      res.status(500).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
    }
  }

  static async buscarPorId(req: Request, res: Response): Promise<void> {
    try {
      const orcamento = await OrcamentoService.buscarOrcamentoPorId(Number(req.params.id));
      if (!orcamento) {
        res.status(404).json({ error: 'Orçamento não encontrado' });
        return;
      }
      res.json(orcamento);
    } catch (error) {
      res.status(500).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
    }
  }

  static async atualizar(req: Request, res: Response): Promise<void> {
    try {
      await OrcamentoService.atualizarOrcamento(Number(req.params.id), req.body);
      res.json({ message: 'Orçamento atualizado com sucesso' });
    } catch (error) {
      res.status(400).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
    }
  }

  static async deletar(req: Request, res: Response): Promise<void> {
    try {
      await OrcamentoService.deletarOrcamento(Number(req.params.id));
      res.json({ message: 'Orçamento deletado com sucesso' });
    } catch (error) {
      res.status(400).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
    }
  }
}