const mongoose = require('mongoose');
const mongoUrl = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/demo';
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(
    () => console.log('=== MongoDB connection successful ==='),
    error => console.error('MongoDB connection fail :', error)
  );

module.exports = mongoose;
