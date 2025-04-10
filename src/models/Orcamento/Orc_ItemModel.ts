// src/models/OrcamentoItemModel.ts
import { db } from '../../config/database';
import { RowDataPacket } from 'mysql2';

export interface OrcamentoItem {
  orcamentoItens_id?: number;
  orcamentoFornecedores_id: number;
  item_id: number;
  quantidade: number;
  marca: string;
  valor_unitario: number;
}

export class OrcamentoItemModel {
  static async create(data: OrcamentoItem[]): Promise<void> {
    const values = data.map(item => [
      item.orcamentoFornecedores_id,
      item.item_id,
      item.quantidade,
      item.marca,
      item.valor_unitario
    ]);

    await db.query(
      'INSERT INTO orcamentoItens (orcamentoFornecedores_id, item_id, quantidade, marca, valor_unitario) VALUES ?',
      [values]
    );
  }

  static async delete(orcamentoItens_id: number): Promise<void> {
    await db.query('DELETE FROM orcamentoItens WHERE orcamentoItens_id = ?', [orcamentoItens_id]);
  }

  static async getAll(): Promise<OrcamentoItem[]> {
    const [rows] = await db.query<RowDataPacket[] & OrcamentoItem[]>(
      'SELECT * FROM orcamentoItens'
    );
    return rows;
  }

  static async findByFornecedorId(orcamentoFornecedores_id: number): Promise<OrcamentoItem[]> {
    const [rows] = await db.query<RowDataPacket[] & OrcamentoItem[]>(
      'SELECT * FROM orcamentoItens WHERE orcamentoFornecedores_id = ?',
      [orcamentoFornecedores_id]
    );
    return rows;
  }

  static async findById(orcamentoItens_id: number): Promise<OrcamentoItem | null> {
    const [rows] = await db.query<RowDataPacket[] & OrcamentoItem[]>(
      'SELECT * FROM orcamentoItens WHERE orcamentoItens_id = ?',
      [orcamentoItens_id]
    );
    return rows.length > 0 ? rows[0] : null;
  }

  static async update(orcamentoItens_id: number, data: Partial<OrcamentoItem>): Promise<void> {
    await db.query(
      'UPDATE orcamentoItens SET quantidade = ?, marca = ?, valor_unitario = ? WHERE orcamentoItens_id = ?',
      [data.quantidade, data.marca, data.valor_unitario, orcamentoItens_id]
    );
  }
}