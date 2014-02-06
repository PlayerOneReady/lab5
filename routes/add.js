var data = require("../data.json");
var friend = require("../Friend.json");

exports.addFriend = function(req, res) {
	var name = req.query.name;
	var description = req.query.description;
	

	 res.render('add', {
    'friend': name,
    'description': description,
   });

	 data["friends"].push(friend);

}