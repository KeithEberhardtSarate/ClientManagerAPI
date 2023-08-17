import { create, list, findbyId } from '../services/clientService.js';

async function createNewClient(req, res) {
  try {
    const { name, email, birthDate, phone } = req.body;
    const client = await create(name, email, birthDate, phone);
    res.status(201).json(client);
  } catch (error) {
    res.status(500).json({ message: 'Error creating client.', erro: error.message });
  }
}

async function listClients(req, res) {
    try {
      const clients = await list();
      res.status(201).json(clients);
    } catch (error) {
      res.status(500).json({ message: 'Error listing client.', erro: error.message });
    }
}

async function getClientById(req, res) {
    try {
      const { _id } = req.body;
      const client = await findbyId(_id);
      if(client){
        res.status(201).json(client);
      }else{
        res.status(404).json({ message: 'Client not found' });
      }      
    } catch (error) {
      res.status(500).json({ message: 'Error listing client.', erro: error.message });
    }
}

export { createNewClient, listClients, getClientById };