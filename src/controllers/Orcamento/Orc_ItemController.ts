// src/controllers/OrcamentoItemController.ts
import { Request, Response } from 'express';
import { OrcamentoItemService } from '../../services/Orcamento/Orc_ItemService';   

export class OrcamentoItemController {
  static async criar(req: Request, res: Response): Promise<void> {
    try {
      await OrcamentoItemService.criarOrcamentoItens(req.body);
      res.status(201).json({ message: 'Itens do orçamento criados com sucesso' });
    } catch (error) {
      res.status(400).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
    }
  }

  static async deletar(req: Request, res: Response): Promise<void> {
    try {
      await OrcamentoItemService.deletarOrcamentoItem(Number(req.params.id));
      res.json({ message: 'Item do orçamento deletado com sucesso' });
    } catch (error) {
      res.status(400).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
    }
  }

  static async listarTodos(req: Request, res: Response): Promise<void> {
    try {
      const itens = await OrcamentoItemService.listarTodosItens();
      res.json(itens);
    } catch (error) {
      res.status(500).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
    }
  }

  static async buscarPorFornecedor(req: Request, res: Response): Promise<void> {
    try {
      const itens = await OrcamentoItemService.buscarItensPorFornecedor(Number(req.params.fornecedor_id));
      res.json(itens);
    } catch (error) {
      res.status(500).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
    }
  }

  static async atualizar(req: Request, res: Response): Promise<void> {
    try {
      const orcamentoItens_id = Number(req.params.id);
      await OrcamentoItemService.atualizarOrcamentoItem(orcamentoItens_id, req.body);
      res.json({ message: 'OrçamentoItem atualizado com sucesso' });
    } catch (error) {
      res.status(400).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
    }
  }
}