import { Router } from "express";
import controllerDoctor from './controllers/controller.doctor.js';

const router = Router(); // Instanciando o Router corretamente

router.get('/doctors', controllerDoctor.Listar); // Verifique se 'Listar' está exportado corretamente

export default router;