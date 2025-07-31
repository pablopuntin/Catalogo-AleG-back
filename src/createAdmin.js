// scripts/createAdmin.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
require('dotenv').config();

const Admin = require('./models/admin');

async function createAdmin() {
  await mongoose.connect(process.env.MONGO_URI);

  const passwordHash = await bcrypt.hash('AG-cat-2025', 10);

 const admin = new Admin({
  username: 'Root',
  password: passwordHash,  // <-- ojo acá, debe ser 'password' no 'passwordHash'
});

  await admin.save();
  console.log('Admin creado');
  process.exit();
}

createAdmin();
