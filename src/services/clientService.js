import Client from '../models/Client.js';

async function create(name, email, birthDate, phone) {
  const newClient = new Client({
    name,
    email,
    birthDate,
    phone
  });
  await newClient.save();
  return newClient;
}

async function list() {
    const clients = await Client.find();
    return clients;
}

async function findbyId(id) {
    const client = await Client.findById(id);
    return client;
}

export { create, list, findbyId };
