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
exports.ItemService = void 0;
// src/services/ItemService.ts
const ItemModel_1 = require("../models/ItemModel");
class ItemService {
    static listarItens() {
        return __awaiter(this, void 0, void 0, function* () {
            return ItemModel_1.ItemModel.getAll();
        });
    }
    static buscarItemPorId(user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return ItemModel_1.ItemModel.findByUserId(user_id);
        });
    }
    static criarItemGeral(data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!data.nome_item || !data.descricao) {
                throw new Error('Os campos nome_item e descricao são obrigatórios');
            }
            // Força o user_id para 0 (itens gerais)
            data.user_id = 0;
            yield ItemModel_1.ItemModel.create(data);
        });
    }
    static criarItemEspecifico(user_id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (user_id === 0) {
                throw new Error('Não é permitido usar user_id = 0 para itens específicos');
            }
            if (!data.nome_item || !data.descricao) {
                throw new Error('Os campos nome_item e descricao são obrigatórios');
            }
            // Define o user_id do usuário que está criando o item
            data.user_id = user_id;
            yield ItemModel_1.ItemModel.create(data);
        });
    }
    static atualizarItem(item_id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!data.nome_item || !data.descricao) {
                throw new Error('Os campos nome_item e descricao são obrigatórios');
            }
            yield ItemModel_1.ItemModel.update(item_id, data);
        });
    }
    static deletarItem(item_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const item = yield ItemModel_1.ItemModel.findByUserId(item_id);
            if (!item) {
                throw new Error('Item não encontrado');
            }
            yield ItemModel_1.ItemModel.delete(item_id);
        });
    }
}
exports.ItemService = ItemService;
//# sourceMappingURL=ItemService.js.map