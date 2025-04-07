// src/controllers/ItemController.ts
import { Request, Response } from 'express';
import { ItemService } from '../services/ItemService';

export class ItemController {
  static async listar(req: Request, res: Response): Promise<void> {
    try {
      const itens = await ItemService.listarItens();
      res.json(itens);
    } catch (error) {
      res.status(500).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
    }
  }

  static async buscarPorId(req: Request, res: Response): Promise<void> {
    try {
      const item = await ItemService.buscarItemPorId(Number(req.params.id));
      if (!item) {
        res.status(404).json({ error: 'Item não encontrado' });
        return;
      }
      res.json(item);
    } catch (error) {
      res.status(500).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
    }
  }

  static async criarGeral(req: Request, res: Response): Promise<void> {
    try {
      await ItemService.criarItemGeral(req.body);
      res.status(201).json({ message: 'Item geral criado com sucesso' });
    } catch (error) {
      res.status(400).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
    }
  }

  static async criarEspecifico(req: Request, res: Response): Promise<void> {
    try {
      const user_id = Number(req.params.user_id);
      await ItemService.criarItemEspecifico(user_id, req.body);
      res.status(201).json({ message: 'Item específico criado com sucesso' });
    } catch (error) {
      res.status(400).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
    }
  }

  static async atualizar(req: Request, res: Response): Promise<void> {
    try {
      await ItemService.atualizarItem(Number(req.params.id), req.body);
      res.json({ message: 'Item atualizado com sucesso' });
    } catch (error) {
      res.status(400).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
    }
  }

  static async deletar(req: Request, res: Response): Promise<void> {
    try {
      await ItemService.deletarItem(Number(req.params.id));
      res.json({ message: 'Item deletado com sucesso' });
    } catch (error) {
      res.status(400).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
    }
  }
}