/* New Account */
module.exports.newAccount = function(req, res){
  res.render('other/newAccount', { title: 'New Account' });
 };

/* About */
module.exports.about = function(req, res){
  res.render('index', { title: 'About' });
};

/* Sign in */
module.exports.signIn = function(req, res){
  res.render('index', { title: 'Sign in' });
};