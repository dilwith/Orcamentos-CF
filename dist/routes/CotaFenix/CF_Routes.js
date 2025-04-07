"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/CF_Routes.ts
const express_1 = require("express");
const FornecedorController_1 = require("../../controllers/FornecedorController");
const UsuarioController_1 = require("../../controllers/UsuarioController");
const ItemController_1 = require("../../controllers/ItemController");
const Orc_Controller_1 = require("../../controllers/Orcamento/Orc_Controller");
const Orc_FornecedorController_1 = require("../../controllers/Orcamento/Orc_FornecedorController");
const Orc_ItemController_1 = require("../../controllers/Orcamento/Orc_ItemController");
const authMiddleware_1 = require("../../middlewares/authMiddleware");
const router = (0, express_1.Router)();
//! Rotas de Usuário
router.post('/usuarios', UsuarioController_1.UsuarioController.criar); // Criar usuário
router.post('/login', UsuarioController_1.UsuarioController.login); // Login de usuário
//? Rotas protegidas
router.get('/usuarios', authMiddleware_1.authMiddleware, UsuarioController_1.UsuarioController.listar);
router.get('/usuarios/:id', authMiddleware_1.authMiddleware, UsuarioController_1.UsuarioController.buscarPorId);
router.put('/usuarios/:id', authMiddleware_1.authMiddleware, UsuarioController_1.UsuarioController.atualizar);
router.delete('/usuarios/:id', authMiddleware_1.authMiddleware, UsuarioController_1.UsuarioController.deletar);
//! Rotas de Fornecedor
router.get('/fornecedores', FornecedorController_1.FornecedorController.listar);
router.get('/fornecedores/:id', FornecedorController_1.FornecedorController.buscarPorId);
router.post('/fornecedores', FornecedorController_1.FornecedorController.criar);
router.put('/fornecedores/:id', FornecedorController_1.FornecedorController.atualizar);
router.delete('/fornecedores/:id', FornecedorController_1.FornecedorController.deletar);
router.get('/orcamento-fornecedor-detalhado', Orc_FornecedorController_1.OrcamentoFornecedorController.listarComNomeFornecedor); // Listar orçamentos com nome do fornecedor
//! Rotas de Itens
router.get('/itens', ItemController_1.ItemController.listar);
router.get('/itens/:id', ItemController_1.ItemController.buscarPorId);
router.post('/itens-geral', ItemController_1.ItemController.criarGeral);
router.post('/itens-especifico/:user_id', ItemController_1.ItemController.criarEspecifico);
router.put('/itens/:id', ItemController_1.ItemController.atualizar);
router.delete('/itens/:id', ItemController_1.ItemController.deletar);
//! Rota de Orçamento
// Orcamento 
router.get('/orcamento', Orc_Controller_1.OrcamentoController.listar); // Listar todos os orçamentos
router.get('/orcamento/:id', Orc_Controller_1.OrcamentoController.buscarPorId); // Buscar orçamento por ID
router.post('/orcamento', Orc_Controller_1.OrcamentoController.criar);
router.put('/orcamento/:id', Orc_Controller_1.OrcamentoController.atualizar); // Atualizar orçamento
router.delete('/orcamento/:id', Orc_Controller_1.OrcamentoController.deletar); // Deletar orçamento
// Fornecedor
router.get('/orcamento-fornecedor', Orc_FornecedorController_1.OrcamentoFornecedorController.listar);
router.post('/orcamento-fornecedor', Orc_FornecedorController_1.OrcamentoFornecedorController.criar);
router.delete('/orcamento-fornecedor/:id', Orc_FornecedorController_1.OrcamentoFornecedorController.deletar); // ERRADA - Deletar fornecedor
// Itens
router.get('/orcamento-itens', Orc_ItemController_1.OrcamentoItemController.listarTodos); // Listar todos os itens
router.get('/orcamento-itens-fornecedor/:fornecedor_id', Orc_ItemController_1.OrcamentoItemController.buscarPorFornecedor); // Buscar itens por fornecedor
router.post('/orcamento-itens', Orc_ItemController_1.OrcamentoItemController.criar);
router.delete('/orcamento-itens/:id', Orc_ItemController_1.OrcamentoItemController.deletar);
exports.default = router;
//# sourceMappingURL=CF_Routes.js.map