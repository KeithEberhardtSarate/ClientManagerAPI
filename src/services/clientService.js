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

export { create, list };