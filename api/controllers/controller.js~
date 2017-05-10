var mongoose = require('mongoose'),
  User = mongoose.model('user');

exports.list_data = function(req, res) {
  User.find({}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.add_data = function(req, res) {
  var new_data = new users(req.body);
  new_data.save(function(err, users) {
    if (err)
      res.send(err);
    res.json(users);
  });
};


exports.read_data = function(req, res) {
  user.findById(req.params.user_id, function(err, users) {
    if (err)
      res.send(err);
    res.json(users);
  });
};

exports.delete_data=function(req,res)
{
user.remove({
_id:req.params.user_id
},
function(err,users)
{
	if(err)
	res.send(err);
	res.json({message:'deleted'},users);
	
});
};

exports.update_data=function(req,res)
{
user.findOneAndUpdate(req.params.user_id,req.body,{new:true},
function(err,users)
{
	if(err)
	res.send(err);
	res.json(users);
});
};