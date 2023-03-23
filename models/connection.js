const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://theovilleneuve:qF3FXqvk1RK1tRIo@cluster0.iij9grs.mongodb.net/hackatweet';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));
