const mongoose = require('mongoose');
const config = require('../shared/config');

module.exports = function () {
  return mongoose
    .connect(`mongodb://127.0.0.1:27017/${config.db.name}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('DB ga ulandi.');
    })
    .catch((err) => {
      console.log('DB da xatolik: ', err);
    });
};
