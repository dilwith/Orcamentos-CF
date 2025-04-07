import { Request, Response } from 'express';
import { UsuarioService } from '../services/UsuarioService';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'chave_secreta_super_segura';

export class UsuarioController {
  static async listar(req: Request, res: Response): Promise<void> {
    try {
      const usuarios = await UsuarioService.listarUsuarios();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
    }
  }

  static async criar(req: Request, res: Response): Promise<void> {
    try {
      await UsuarioService.criarUsuario(req.body);
      res.status(201).json({ message: 'Usuário criado com sucesso' });
    } catch (error) {
      res.status(400).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
    }
  }

  static async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, senha } = req.body;
      const usuario = await UsuarioService.autenticarUsuario(email, senha);

      // Gerar o token JWT
      const token = jwt.sign(
        { usuario_id: usuario?.usuario_id, email: usuario?.email },
        JWT_SECRET,
        { expiresIn: '1h' }
      );

      res.json({ token });
    } catch (error) {
      res.status(401).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
    }
  }

  static async buscarPorId(req: Request, res: Response): Promise<void> {
    try {
      const usuario = await UsuarioService.buscarUsuarioPorId(Number(req.params.id));
      if (!usuario) {
        res.status(404).json({ error: 'Usuário não encontrado' });
        return;
      }
      res.json(usuario);
    } catch (error) {
      res.status(500).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
    }
  }

  static async atualizar(req: Request, res: Response): Promise<void> {
    try {
      await UsuarioService.atualizarUsuario(Number(req.params.id), req.body);
      res.json({ message: 'Usuário atualizado com sucesso' });
    } catch (error) {
      res.status(400).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
    }
  }

  static async deletar(req: Request, res: Response): Promise<void> {
    try {
      await UsuarioService.deletarUsuario(Number(req.params.id));
      res.json({ message: 'Usuário deletado com sucesso' });
    } catch (error) {
      res.status(400).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
    }
  }
}