// src/controllers/FornecedorController.ts
import { Request, Response } from 'express';
import { FornecedorService } from '../services/FornecedorService';

export class FornecedorController {
  static async listar(req: Request, res: Response): Promise<void> {
    try {
      const fornecedores = await FornecedorService.listarFornecedores();
      res.json(fornecedores);
    } catch (error) {
      res.status(500).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
    }
  }

  static async buscarPorId(req: Request, res: Response): Promise<void> {
    try {
      const fornecedor = await FornecedorService.buscarFornecedorPorId(Number(req.params.id));
      if (!fornecedor) {
        res.status(404).json({ error: 'Fornecedor não encontrado' });
        return;
      }
      res.json(fornecedor);
    } catch (error) {
      res.status(500).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
    }
  }

  static async criar(req: Request, res: Response): Promise<void> {
    try {
      await FornecedorService.criarFornecedor(req.body);
      res.status(201).json({ message: 'Fornecedor criado com sucesso' });
    } catch (error) {
      res.status(400).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
    }
  }

  static async atualizar(req: Request, res: Response): Promise<void> {
    try {
      await FornecedorService.atualizarFornecedor(Number(req.params.id), req.body);
      res.json({ message: 'Fornecedor atualizado com sucesso' });
    } catch (error) {
      res.status(400).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
    }
  }

  static async deletar(req: Request, res: Response): Promise<void> {
    try {
      await FornecedorService.deletarFornecedor(Number(req.params.id));
      res.json({ message: 'Fornecedor deletado com sucesso' });
    } catch (error) {
      res.status(400).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
    }
  }
}