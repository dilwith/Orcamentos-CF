// src/models/UsuarioModel.ts
import { db } from '../config/database';
import { RowDataPacket } from 'mysql2';

export interface Usuario {
  usuario_id?: number;
  nome: string;
  email: string;
  senha: string;
}

export class UsuarioModel {
  static async getAll(): Promise<Usuario[]> {
    const [rows] = await db.query<RowDataPacket[] & Usuario[]>(
      'SELECT * FROM usuario'
    );
    return rows;
  }

  static async create(usuario: Usuario): Promise<void> {
    await db.query(
      'INSERT INTO usuario (nome, email, senha) VALUES (?, ?, ?)',
      [usuario.nome, usuario.email, usuario.senha]
    );
  }

  static async findByEmail(email: string): Promise<Usuario | null> {
    const [rows] = await db.query<RowDataPacket[] & Usuario[]>(
      'SELECT * FROM usuario WHERE email = ?',
      [email]
    );
    return rows.length > 0 ? rows[0] : null;
  }
  static async findById(usuario_id: number): Promise<Usuario | null> {
    const [rows] = await db.query<RowDataPacket[] & Usuario[]>(
      'SELECT * FROM usuario WHERE usuario_id = ?',
      [usuario_id]
    );
    return rows.length > 0 ? rows[0] : null;
  }

  static async update(usuario_id: number, usuario: Usuario): Promise<void> {
    await db.query(
      'UPDATE usuario SET nome = ?, email = ?, senha = ? WHERE usuario_id = ?',
      [usuario.nome, usuario.email, usuario.senha, usuario_id]
    );
  }

  static async delete(usuario_id: number): Promise<void> {
    await db.query('DELETE FROM usuario WHERE usuario_id = ?', [usuario_id]);
  }

}