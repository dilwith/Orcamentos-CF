// src/controllers/OrcamentoFornecedorController.ts
import { Request, Response } from 'express';
import { OrcamentoFornecedorService } from '../../services/Orcamento/Orc_FornecedorService';

export class OrcamentoFornecedorController {
  static async listar(req: Request, res: Response): Promise<void> {
    try {
      const fornecedores = await OrcamentoFornecedorService.listarOrcamentoFornecedores();
      res.json(fornecedores);
    } catch (error) {
      res.status(500).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
    }
  }

  static async criar(req: Request, res: Response): Promise<void> {
    try {
      const id = await OrcamentoFornecedorService.criarOrcamentoFornecedor(req.body);
      res.status(201).json({ message: 'OrçamentoFornecedor criado com sucesso', id });
    } catch (error) {
      res.status(400).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
    }
  }

  static async deletar(req: Request, res: Response): Promise<void> {
    try {
      await OrcamentoFornecedorService.deletarOrcamentoFornecedor(Number(req.params.id));
      res.json({ message: 'OrçamentoFornecedor deletado com sucesso' });
    } catch (error) {
      res.status(400).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
    }
  }

  static async listarComNomeFornecedor(req: Request, res: Response): Promise<void> {
    try {
      const orcamentos = await OrcamentoFornecedorService.listarComNomeFornecedor();
      res.json(orcamentos);
    } catch (error) {
      res.status(500).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
    }
  }
}