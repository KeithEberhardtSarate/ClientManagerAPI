import { create, list } from '../services/clientService.js';

async function createNewClient(req, res) {
  try {
    const { name, email, birthDate, phone } = req.body;
    const client = await create(name, email, birthDate, phone);
    res.status(201).json(client);
  } catch (error) {
    res.status(500).json({ mensagem: 'Error creating client.', erro: error.message });
  }
}

async function listClients(req, res) {
    try {
      const clients = await list();
      res.status(201).json(clients);
    } catch (error) {
      res.status(500).json({ mensagem: 'Error listing client.', erro: error.message });
    }
}

export { createNewClient, listClients };