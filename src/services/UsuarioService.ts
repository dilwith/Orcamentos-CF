import { UsuarioModel, Usuario } from '../models/UsuarioModel';
import bcrypt from 'bcryptjs';

export class UsuarioService {
  static async listarUsuarios(): Promise<Usuario[]> {
    return UsuarioModel.getAll();
  }

  static async criarUsuario(data: Usuario): Promise<void> {
    if (!data.nome || !data.email || !data.senha) {
      throw new Error('Nome, email e senha são obrigatórios');
    }

    if (data.senha.length < 5) {
      throw new Error('A senha deve ter no mínimo 5 caracteres');
    }

    const existingUser = await UsuarioModel.findByEmail(data.email);
    if (existingUser) {
      throw new Error('Email já cadastrado');
    }

    // Criptografar a senha antes de salvar
    const senhaCriptografada = await bcrypt.hash(data.senha, 10);
    data.senha = senhaCriptografada;

    await UsuarioModel.create(data);
  }

  static async autenticarUsuario(email: string, senha: string): Promise<Usuario | null> {
    const usuario = await UsuarioModel.findByEmail(email);
    if (!usuario) {
      throw new Error('Usuário não encontrado');
    }

    // Verificar a senha
    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) {
      throw new Error('Senha incorreta');
    }

    return usuario;
  }

  static async buscarUsuarioPorId(usuario_id: number): Promise<Usuario | null> {
    return UsuarioModel.findById(usuario_id);
  }

  static async atualizarUsuario(usuario_id: number, data: Usuario): Promise<void> {
    if (!data.nome || !data.email || !data.senha) {
      throw new Error('Os campos nome, email e senha são obrigatórios');
    }

    await UsuarioModel.update(usuario_id, data);
  }

  static async deletarUsuario(usuario_id: number): Promise<void> {
    const usuario = await UsuarioModel.findById(usuario_id);
    if (!usuario) {
      throw new Error('Usuário não encontrado');
    }

    await UsuarioModel.delete(usuario_id);
  }
}