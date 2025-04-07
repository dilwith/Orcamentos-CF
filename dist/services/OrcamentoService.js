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
exports.OrcamentoService = void 0;
// src/services/OrcamentoService.ts
const OrcamentoModel_1 = require("../models/Orcamento/OrcamentoModel");
class OrcamentoService {
    static criarOrcamento(data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!data.usuario_id || !data.objetivo) {
                throw new Error('Os campos usuario_id e objetivo são obrigatórios');
            }
            return OrcamentoModel_1.OrcamentoModel.create(data);
        });
    }
}
exports.OrcamentoService = OrcamentoService;
//# sourceMappingURL=OrcamentoService.js.map