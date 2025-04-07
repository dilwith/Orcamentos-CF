// src/models/OrcamentoModel.ts
import { db } from '../../config/database';
import { RowDataPacket } from 'mysql2';

export interface Orcamento {
  orcamento_id?: number;
  usuario_id: number;
  objetivo: string;
}

export class OrcamentoModel {
  static async getAll(): Promise<Orcamento[]> {
    const [rows] = await db.query<RowDataPacket[] & Orcamento[]>(
      'SELECT * FROM orcamento'
    );
    return rows;
  }
  static async create(orcamento: Orcamento): Promise<number> {
    const [result] = await db.query(
      'INSERT INTO orcamento (usuario_id, objetivo) VALUES (?, ?)',
      [orcamento.usuario_id, orcamento.objetivo]
    );
    return (result as any).insertId; // Retorna o ID do orçamento criado
  }
  static async findById(orcamento_id: number): Promise<Orcamento | null> {
    const [rows] = await db.query<RowDataPacket[] & Orcamento[]>(
      'SELECT * FROM orcamento WHERE orcamento_id = ?',
      [orcamento_id]
    );
    return rows.length > 0 ? rows[0] : null;
  }

  static async update(orcamento_id: number, orcamento: Orcamento): Promise<void> {
    await db.query(
      'UPDATE orcamento SET objetivo = ? WHERE orcamento_id = ?',
      [orcamento.objetivo, orcamento_id]
    );
  }

  static async delete(orcamento_id: number): Promise<void> {
    await db.query('DELETE FROM orcamento WHERE orcamento_id = ?', [orcamento_id]);
  }
}