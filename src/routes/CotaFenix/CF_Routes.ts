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

router.post('/usuarios', UsuarioController.criar); // Criar usuário
router.post('/login', UsuarioController.login); // Login de usuário

    //? Rotas protegidas
    router.get('/usuarios', authMiddleware, UsuarioController.listar);
    router.get('/usuarios/:id', authMiddleware, UsuarioController.buscarPorId);
    router.put('/usuarios/:id', authMiddleware, UsuarioController.atualizar);
    router.delete('/usuarios/:id', authMiddleware, UsuarioController.deletar);

//! Rotas de Fornecedor
router.get('/fornecedores', FornecedorController.listar);
router.get('/fornecedores/:id', FornecedorController.buscarPorId);
router.post('/fornecedores', FornecedorController.criar);
router.put('/fornecedores/:id', FornecedorController.atualizar);
router.delete('/fornecedores/:id', FornecedorController.deletar);
router.get('/orcamento-fornecedor-detalhado', OrcamentoFornecedorController.listarComNomeFornecedor); // Listar orçamentos com nome do fornecedor

//! Rotas de Itens
router.get('/itens', ItemController.listar);
router.get('/itens/:id', ItemController.buscarPorId);
router.post('/itens-geral', ItemController.criarGeral);
router.post('/itens-especifico/:user_id', ItemController.criarEspecifico);
router.put('/itens/:id', ItemController.atualizar);
router.delete('/itens/:id', ItemController.deletar);

//! Rota de Orçamento
    // Orcamento 
    router.get('/orcamento', OrcamentoController.listar); // Listar todos os orçamentos
    router.get('/orcamento/:id', OrcamentoController.buscarPorId); // Buscar orçamento por ID
    router.post('/orcamento', OrcamentoController.criar);
    router.put('/orcamento/:id', OrcamentoController.atualizar); // Atualizar orçamento
    router.delete('/orcamento/:id', OrcamentoController.deletar); // Deletar orçamento

    // Fornecedor
    router.get('/orcamento-fornecedor', OrcamentoFornecedorController.listar);
    router.post('/orcamento-fornecedor', OrcamentoFornecedorController.criar);
    router.delete('/orcamento-fornecedor/:id', OrcamentoFornecedorController.deletar); // ERRADA - Deletar fornecedor

    // Itens
    router.get('/orcamento-itens', OrcamentoItemController.listarTodos); // Listar todos os itens
    router.get('/orcamento-itens-fornecedor/:fornecedor_id', OrcamentoItemController.buscarPorFornecedor); // Buscar itens por fornecedor
    router.post('/orcamento-itens', OrcamentoItemController.criar);
    router.delete('/orcamento-itens/:id', OrcamentoItemController.deletar);
    
export default router;