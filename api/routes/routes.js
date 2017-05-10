module.exports = function(app) {
  var userlist = require('../controllers/controller');


  app.route('/user')
    .get(userlist.list_data)
   .post(userlist.add_data);


  app.route('/user/:user_id')
    .get(userlist.read_data)
    .put(userlist.update_data)
    .delete(userlist.delete_data);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});    
};
