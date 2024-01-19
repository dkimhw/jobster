
require('dotenv').config();

const mockData = require('./mock-data.json');

const Job = require('./models/Job');
const connectDB = require('./db/connect');

const start = async () => {
  try {
    const connectionStr = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_SERVER}/${process.env.MONGODB_DB}?retryWrites=true&w=majority`;
    await connectDB(connectionStr);
    await Job.deleteMany({});
    await Job.create(mockData);
    console.log('Uploaded sucessfully.');
    process.exit(0)
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

start();
