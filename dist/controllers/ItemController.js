"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemController = void 0;
const ItemService_1 = require("../services/ItemService");
class ItemController {
    static listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const itens = yield ItemService_1.ItemService.listarItens();
                res.json(itens);
            }
            catch (error) {
                res.status(500).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
            }
        });
    }
    static buscarPorId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const item = yield ItemService_1.ItemService.buscarItemPorId(Number(req.params.id));
                if (!item) {
                    res.status(404).json({ error: 'Item não encontrado' });
                    return;
                }
                res.json(item);
            }
            catch (error) {
                res.status(500).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
            }
        });
    }
    static criarGeral(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield ItemService_1.ItemService.criarItemGeral(req.body);
                res.status(201).json({ message: 'Item geral criado com sucesso' });
            }
            catch (error) {
                res.status(400).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
            }
        });
    }
    static criarEspecifico(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user_id = Number(req.params.user_id);
                yield ItemService_1.ItemService.criarItemEspecifico(user_id, req.body);
                res.status(201).json({ message: 'Item específico criado com sucesso' });
            }
            catch (error) {
                res.status(400).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
            }
        });
    }
    static atualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield ItemService_1.ItemService.atualizarItem(Number(req.params.id), req.body);
                res.json({ message: 'Item atualizado com sucesso' });
            }
            catch (error) {
                res.status(400).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
            }
        });
    }
    static deletar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield ItemService_1.ItemService.deletarItem(Number(req.params.id));
                res.json({ message: 'Item deletado com sucesso' });
            }
            catch (error) {
                res.status(400).json({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
            }
        });
    }
}
exports.ItemController = ItemController;
//# sourceMappingURL=ItemController.js.map