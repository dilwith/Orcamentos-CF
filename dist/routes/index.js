"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/index.ts
const express_1 = require("express");
const CF_Routes_1 = __importDefault(require("./CotaFenix/CF_Routes"));
const router = (0, express_1.Router)();
// Usar todas as rotas definidas em CF_Routes
router.use(CF_Routes_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map