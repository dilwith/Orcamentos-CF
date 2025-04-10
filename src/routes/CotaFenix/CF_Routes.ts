// src/routes/CF_Routes.ts
import { Router } from 'express';
import { FornecedorController } from '../../controllers/FornecedorController';
import { UsuarioController } from '../../controllers/UsuarioController';
import { ItemController } from '../../controllers/ItemController';
import { OrcamentoController } from '../../controllers/Orcamento/Orc_Controller';
import { OrcamentoFornecedorController } from '../../controllers/Orcamento/Orc_FornecedorController';
import { OrcamentoItemController } from '../../controllers/Orcamento/Orc_ItemController';
import { authMiddleware } from '../../middlewares/authMiddleware';

const router = Router();

//! Rotas de Usuário
router.get('/usuarios', authMiddleware, UsuarioController.listar);
router.get('/usuarios/:id', authMiddleware, UsuarioController.buscarPorId);
router.put('/usuarios/:id', authMiddleware, UsuarioController.atualizar);
router.delete('/usuarios/:id', authMiddleware, UsuarioController.deletar);

    //? LOGIN 
    router.post('/usuarios', UsuarioController.criar); // Criar usuário
    router.post('/login', UsuarioController.login); // Login de usuário

//! Rotas de Fornecedor
router.get('/fornecedores', authMiddleware, FornecedorController.listar);
router.get('/fornecedores/:id', authMiddleware, FornecedorController.buscarPorId);
router.post('/fornecedores', authMiddleware, FornecedorController.criar);
router.put('/fornecedores/:id', authMiddleware, FornecedorController.atualizar);
router.delete('/fornecedores/:id', authMiddleware, FornecedorController.deletar);
router.get('/orcamento-fornecedor-detalhado', authMiddleware, OrcamentoFornecedorController.listarComNomeFornecedor); // Listar orçamentos com nome do fornecedor

//! Rotas de Itens
router.get('/itens', authMiddleware, ItemController.listar);
router.get('/itens/:id', authMiddleware, ItemController.buscarPorId);
router.post('/itens-geral', authMiddleware, ItemController.criarGeral);
router.post('/itens-especifico/:user_id', authMiddleware, ItemController.criarEspecifico);
router.put('/itens/:id', authMiddleware, ItemController.atualizar);
router.delete('/itens/:id', authMiddleware, ItemController.deletar);

//! Rota de Orçamento
    // Orcamento 
    router.get('/orcamento', authMiddleware, OrcamentoController.listar); // Listar todos os orçamentos
    router.get('/orcamento/:id', authMiddleware, OrcamentoController.buscarPorId); // Buscar orçamento por ID
    router.post('/orcamento', authMiddleware, OrcamentoController.criar);
    router.put('/orcamento/:id', authMiddleware, OrcamentoController.atualizar); // Atualizar orçamento
    router.delete('/orcamento/:id', authMiddleware, OrcamentoController.deletar); // Deletar orçamento

    // Fornecedor
    router.get('/orcamento-fornecedor', authMiddleware, OrcamentoFornecedorController.listar);
    router.post('/orcamento-fornecedor', authMiddleware, OrcamentoFornecedorController.criar);
    router.delete('/orcamento-fornecedor/:id', authMiddleware, OrcamentoFornecedorController.deletar); // ERRADA - Deletar fornecedor

    // Itens
    router.get('/orcamento-itens', authMiddleware, OrcamentoItemController.listarTodos); // Listar todos os itens
    router.get('/orcamento-itens-fornecedor/:fornecedor_id', authMiddleware, OrcamentoItemController.buscarPorFornecedor); // Buscar itens por fornecedor
    router.post('/orcamento-itens', authMiddleware, OrcamentoItemController.criar);
    router.delete('/orcamento-itens/:id', authMiddleware, OrcamentoItemController.deletar);
    
export default router;