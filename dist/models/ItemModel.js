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
exports.ItemModel = void 0;
// src/models/ItemModel.ts
const database_1 = require("../config/database");
class ItemModel {
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield database_1.db.query('SELECT * FROM itens');
            return rows;
        });
    }
    static findByUserId(user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield database_1.db.query('SELECT * FROM itens WHERE user_id = ?', [user_id]);
            return rows;
        });
    }
    static create(item) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.query('INSERT INTO itens (user_id, nome_item, descricao) VALUES (?, ?, ?)', [item.user_id, item.nome_item, item.descricao]);
        });
    }
    static update(item_id, item) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.query('UPDATE itens SET nome_item = ?, descricao = ? WHERE item_id = ?', [item.nome_item, item.descricao, item_id]);
        });
    }
    static delete(item_id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.query('DELETE FROM itens WHERE item_id = ?', [item_id]);
        });
    }
}
exports.ItemModel = ItemModel;
//# sourceMappingURL=ItemModel.js.map