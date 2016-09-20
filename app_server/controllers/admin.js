/* Get 'team admin' page */
module.exports.teamSummary = function(req, res){
  res.render('admin/teamSummary', { 
  	title: 'Atholl 1965 Summary',
  	players: [{
		id: '1', 
		details: {
			name: 'Chris Davies'
		},
		stats: {
			goals: '12',
			assists: '10',
			redCards: '2',
			yellowCards: '1',
			motm: '0'
		},
		points: {
			goals: '100',
			assists: '120',
			redCards: '30',
			yellowCards: '60',
			motm: '2',
			total: '1000'
		},
		games: [{
			id: '1'
		}, {
			id: '2'
		}],
	},{
  		id: '2', 
  		details: {
  			name: 'Rich Burton'
  		},
  		stats: {
  			goals: '1',
  			assists: '3',
  			redCards: '10',
  			yellowCards: '29',
  			motm: '0'
  		},
  		points: {
  			goals: '10',
  			assists: '12',
  			redCards: '344',
  			yellowCards: '603',
  			motm: '0'
  		},
  		games: [{
  			id: '1'
  		}, {
  			id: '2'
  		}],
  	}],
    games: [{
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
  	}],
  	rules:[{
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
     }],
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