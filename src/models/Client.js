import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true },
  birthDate: { type: Date, required: true },
  phone: { type: String, required: true },
});

const Client = mongoose.model('Client', clientSchema);

export default Client;