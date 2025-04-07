// src/services/ItemService.ts
import { ItemModel, Item } from '../models/ItemModel';

export class ItemService {
  static async listarItens(): Promise<Item[]> {
    return ItemModel.getAll();
  }

  static async buscarItemPorId(user_id: number): Promise<Item[]> {
    return ItemModel.findByUserId(user_id);
  }

  static async criarItemGeral(data: Item): Promise<void> {
    if (!data.nome_item || !data.descricao) {
      throw new Error('Os campos nome_item e descricao são obrigatórios');
    }

    // Força o user_id para 0 (itens gerais)
    data.user_id = 0;
    await ItemModel.create(data);
  }

  static async criarItemEspecifico(user_id: number, data: Item): Promise<void> {
    if (user_id === 0) {
      throw new Error('Não é permitido usar user_id = 0 para itens específicos');
    }

    if (!data.nome_item || !data.descricao) {
      throw new Error('Os campos nome_item e descricao são obrigatórios');
    }

    // Define o user_id do usuário que está criando o item
    data.user_id = user_id;
    await ItemModel.create(data);
  }
  static async atualizarItem(item_id: number, data: Item): Promise<void> {
    if (!data.nome_item || !data.descricao) {
      throw new Error('Os campos nome_item e descricao são obrigatórios');
    }

    await ItemModel.update(item_id, data);
  }

  static async deletarItem(item_id: number): Promise<void> {
    const item = await ItemModel.findByUserId(item_id);
    if (!item) {
      throw new Error('Item não encontrado');
    }

    await ItemModel.delete(item_id);
  }
}