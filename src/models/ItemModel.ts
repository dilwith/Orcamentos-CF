// src/models/ItemModel.ts
import { db } from '../config/database';
import { RowDataPacket } from 'mysql2';

export interface Item {
  item_id?: number;
  user_id: number;
  nome_item: string;
  descricao: string;
}

export class ItemModel {
  static async getAll(): Promise<Item[]> {
    const [rows] = await db.query<RowDataPacket[] & Item[]>(
      'SELECT * FROM itens'
    );
    return rows;
  }

  static async findByUserId(user_id: number): Promise<Item[]> {
    const [rows] = await db.query<RowDataPacket[] & Item[]>(
      'SELECT * FROM itens WHERE user_id = ?',
      [user_id]
    );
    return rows;
  }

  static async create(item: Item): Promise<void> {
    await db.query(
      'INSERT INTO itens (user_id, nome_item, descricao) VALUES (?, ?, ?)',
      [item.user_id, item.nome_item, item.descricao]
    );
  }

  static async update(item_id: number, item: Item): Promise<void> {
    await db.query(
      'UPDATE itens SET nome_item = ?, descricao = ? WHERE item_id = ?',
      [item.nome_item, item.descricao, item_id]
    );
  }

  static async delete(item_id: number): Promise<void> {
    await db.query('DELETE FROM itens WHERE item_id = ?', [item_id]);
  }
}