import express from 'express';
import { createNewClient, listClients } from '../controllers/clientController.js';

const router = express.Router();

router.post('/', createNewClient);
router.get('/', listClients);
// router.get('/:id', getClientById);
// router.put('/:id', updateClient);
// router.patch('/:id', updateClient);
// router.delete('/:id', deleteClient);

export default router;