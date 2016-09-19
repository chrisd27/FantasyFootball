/* Get 'team admin' page */
module.exports.admin = function(req, res){
  res.render('index', { title: 'Team admin' });
};

/* Get 'add rules' page */
module.exports.addRules = function(req, res){
  res.render('index', { title: 'Add Rules' });
};

/* Get 'add player' page */
module.exports.addPlayer = function(req, res){
  res.render('index', { title: 'Add Player' });
};

/* Get 'add game' page */
module.exports.addGame = function(req, res){
  res.render('index', { title: 'Add Game' });
};