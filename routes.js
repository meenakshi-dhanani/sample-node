module.exports = function (app) {
  /*
  * Routes
  */
  app.use('/pets', require('./routes/pets.route'));

};
