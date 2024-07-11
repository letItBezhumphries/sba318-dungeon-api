const mongoose = require('mongoose');
require('dotenv').config();

const mongoURL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@dungeonbuilder.qm7agcq.mongodb.net/?retryWrites=true&w=majority&appName=dungeonbuilder`;

const dbConnect = async () => {
  try {
    await mongoose.connect(mongoURL, {
      // useNewUrlParser: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
    });

    console.log('connecting to mongodb atlas cluster dungeonbuilder ...');
  } catch (error) {
    console.error(error.message);

    process.exit(1);
  }
};

module.exports = dbConnect;
