const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://alexandresossou:k8pliOfCEJXBZ3X7@cluster0.4hmkxzk.mongodb.net/Hackatweet1';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));
