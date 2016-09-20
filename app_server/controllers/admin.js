/* Get 'team admin' page */
module.exports.teamSummary = function(req, res){
  res.render('admin/teamSummary', { 
  	title: 'Atholl 1965 Summary',
  	players: {
  		details: [{
  		  id: '1', 
  		  name: 'Chris Davies', 
  		  fantasy: '9', 
  		  goals: '100', 
  		  assists: '99'
  		},{ 
  		  id: '2', 
  	    name: 'Rich Burton',
  	    fantasy: '0', 
  	    goals: '-12', 
  	    assists: '-13'
  	    }]
  	},
    games: {
    	details: [{
  		    id: '1', 
  		    opposition: 'Wales', 
  		    score: '3-0', 
  		    date: '21/04/2016', 
  		    MOTM: 'Chris Davies'
  	    },{
  	    	id: '2', 
  		    opposition: 'Jonny Spurving', 
  		    score: '2-2', 
  		    date: '10/05/2016', 
  		    MOTM: 'SAB'
  		}]
  	},
    rules: {
      details: [{
          id: '1', 
          rule: 'Goal', 
          points: '5', 
          position: 'Defender',
          custom: 'No'
        },{
          id: '2', 
          rule: 'Assist', 
          points: '3', 
          position: 'Defender',
          custom: 'No'
      }]
    }
  });
};

/* Get 'add rules' page */
module.exports.addRules = function(req, res){
  res.render('admin/addRules', { title: 'Add Rules' });
};

/* Get 'add player' page */
module.exports.addPlayer = function(req, res){
  res.render('admin/addPlayer', { title: 'Add Player' });
};

/* Get 'add game' page */
module.exports.addGame = function(req, res){
  res.render('admin/addGame', { title: 'Add Game' });
};

/* Get 'edit game' page */
module.exports.editGame = function(req, res){
  res.render('admin/editGame', { 
    title: 'Edit game',
    game: {
      id: '1',
      oppositionName: 'CPR A',
      date: '21st September',
      score: '2-1',
      matchReport: 'we won!'
    }

   });
};

/* Get 'edit player' page */
module.exports.editPlayer = function(req, res){
  res.render('admin/editPlayer', { title: 'Edit player' });
};

/* Get 'edit rule' page */
module.exports.editRule = function(req, res){
  res.render('admin/editRule', { title: 'Edit rule' });
};

/* Get 'view game' page */
module.exports.viewGame = function(req, res){
  res.render('admin/viewGame', { 
    title: 'View game',
    game: {
      id: '1',
      oppositionName: 'CPR A',
      date: '21st September',
      score: '2-1',
      matchReport: 'we won!'
    }

   });
};

/* Get 'view player' page */
module.exports.viewPlayer = function(req, res){
  res.render('admin/viewPlayer', { title: 'View player' });
};

/* Get 'view rule' page */
module.exports.viewRules = function(req, res){
  res.render('admin/viewRules', { title: 'View rule' });
};