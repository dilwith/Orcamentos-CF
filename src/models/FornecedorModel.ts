// src/models/FornecedorModel.ts
import { db } from '../config/database';
import { RowDataPacket } from 'mysql2';

export interface Fornecedor {
  fornecedor_id?: number;
  nome: string;
  email: string;
  telefone: string;
  cnpj: string;
}

export class FornecedorModel {
  static async getAll(): Promise<Fornecedor[]> {
    const [rows] = await db.query<RowDataPacket[] & Fornecedor[]>(
      'SELECT * FROM fornecedores'
    );
    return rows;
  }

  static async findById(fornecedor_id: number): Promise<Fornecedor | null> {
    const [rows] = await db.query<RowDataPacket[] & Fornecedor[]>(
      'SELECT * FROM fornecedores WHERE fornecedor_id = ?',
      [fornecedor_id]
    );
    return rows.length > 0 ? rows[0] : null;
  }

  static async findByCnpj(cnpj: string): Promise<Fornecedor | null> {
    const [rows] = await db.query<RowDataPacket[] & Fornecedor[]>(
      'SELECT * FROM fornecedores WHERE cnpj = ?',
      [cnpj]
    );
    return rows.length > 0 ? rows[0] : null;
  }

  static async create(fornecedor: Fornecedor): Promise<void> {
    await db.query(
      'INSERT INTO fornecedores (nome, email, telefone, cnpj) VALUES (?, ?, ?, ?)',
      [fornecedor.nome, fornecedor.email, fornecedor.telefone, fornecedor.cnpj]
    );
  }

  static async update(fornecedor_id: number, fornecedor: Fornecedor): Promise<void> {
    await db.query(
      'UPDATE fornecedores SET nome = ?, email = ?, telefone = ?, cnpj = ? WHERE fornecedor_id = ?',
      [fornecedor.nome, fornecedor.email, fornecedor.telefone, fornecedor.cnpj, fornecedor_id]
    );
  }

  static async delete(fornecedor_id: number): Promise<void> {
    await db.query('DELETE FROM fornecedores WHERE fornecedor_id = ?', [fornecedor_id]);
  }
}