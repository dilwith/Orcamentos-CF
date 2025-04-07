// src/models/OrcamentoFornecedorModel.ts
import { db } from '../../config/database';
import { RowDataPacket } from 'mysql2';

export interface OrcamentoFornecedor {
  orcamentoFornecedores_id?: number;
  orcamento_id: number;
  fornecedor_id: number;
  data_envio: Date;
}
export interface OrcamentoFornecedorDetalhado {
  orcamentoFornecedores_id: number;
  orcamento_id: number;
  fornecedor_id: number;
  data_envio: Date;
  nome: string; // Nome do fornecedor
}

export class OrcamentoFornecedorModel {
  
  static async getAll(): Promise<OrcamentoFornecedor[]> {
    const [rows] = await db.query<RowDataPacket[] & OrcamentoFornecedor[]>(
      'SELECT * FROM orcamentoFornecedores'
    );
    return rows;
  }

  static async create(data: OrcamentoFornecedor): Promise<number> {
    const [result] = await db.query(
      'INSERT INTO orcamentoFornecedores (orcamento_id, fornecedor_id, data_envio) VALUES (?, ?, NOW())',
      [data.orcamento_id, data.fornecedor_id]
    );
    return (result as any).insertId;
  }

  static async findById(orcamentoFornecedores_id: number): Promise<OrcamentoFornecedor | null> {
    const [rows] = await db.query<RowDataPacket[] & OrcamentoFornecedor[]>(
      'SELECT * FROM orcamentoFornecedores WHERE orcamentoFornecedores_id = ?',
      [orcamentoFornecedores_id]
    );
    return rows.length > 0 ? rows[0] : null;
  }

  static async delete(orcamentoFornecedores_id: number): Promise<void> {
    await db.query('DELETE FROM orcamentoFornecedores WHERE orcamentoFornecedores_id = ?', [
      orcamentoFornecedores_id
    ]);
  }

  static async listarComNomeFornecedor(): Promise<OrcamentoFornecedorDetalhado[]> {
    const [rows] = await db.query<RowDataPacket[] & OrcamentoFornecedorDetalhado[]>(
      `SELECT O.*, F.nome 
       FROM orcamentoFornecedores AS O 
       LEFT JOIN fornecedores AS F 
       ON F.fornecedor_id = O.fornecedor_id`
    );
    return rows;
  }
} 