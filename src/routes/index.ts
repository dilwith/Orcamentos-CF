// src/routes/index.ts
import { Router } from 'express';
import CF_Routes from './CotaFenix/CF_Routes';

const router = Router();

// Usar todas as rotas definidas em CF_Routes
router.use(CF_Routes);

export default router;