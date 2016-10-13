/* Get 'team admin' page */
module.exports.teamSummary = function(req, res){
  res.render('admin/teamSummary', { 
    title: 'Atholl 1965 Summary',
    players: [{
      id: '1', 
      details: {
        name: 'Chris Davies'
      },
     stats: [{
       gameId: '4',
       rules:[{
          id: '1',
          value: '2'
        },{
          id: '2',
          value: '2'
        },{
          id: '3',
          value: '2'
        },{
          id: '4',
          value: '5'
        },{
          id: '5',
          value: '2'
        },{
          id: '6',
          value: '2'
        },{
          id: '7',
          value: '2'
        },{
          id: '8',
          value: '0'
        }],
        position: 'D'
      },{
       gameId: '1',
         rules:[{
          id: '1',
          value: '2'
        },{
          id: '2',
          value: '2'
        },{
          id: '3',
          value: '2'
        },{
          id: '4',
          value: '5'
        },{
          id: '5',
          value: '2'
        },{
          id: '6',
          value: '2'
        },{
          id: '7',
          value: '2'
        },{
          id: '8',
          value: '0'
        }],
        position: 'D'
      }],
      totals: {
        goals: '10',
        goalPoints: '2',
        assists: '3',
        assistPoints: '12',
        redCards: '344',
        yellowCards: '603',
        motm: '0',
        fantasyTotal: '1222'
      },
    },{
      id: '2', 
      details: {
        name: 'Rich Burton'
      },
      stats: [{
        gameId: '1',
        rules:[{
          id: '1',
          value: '2'
        },{
          id: '2',
          value: '2'
        },{
          id: '3',
          value: '2'
        },{
          id: '4',
          value: '5'
        },{
          id: '5',
          value: '2'
        },{
          id: '6',
          value: '2'
        },{
          id: '7',
          value: '2'
        },{
          id: '8',
          value: '0'
        }],
        position: 'D'
      },{
        gameId: '2',
        rules:[{
          id: '1',
          value: '2'
        },{
          id: '2',
          value: '2'
        },{
          id: '3',
          value: '2'
        },{
          id: '4',
          value: '5'
        },{
          id: '5',
          value: '2'
        },{
          id: '6',
          value: '2'
        },{
          id: '7',
          value: '2'
        },{
          id: '8',
          value: '0'
        }],
        position: 'D'
      }],
      totals: {
        goals: '10',
        goalPoints: '2',
        assists: '3',
        assistPoints: '12',
        redCards: '344',
        yellowCards: '603',
        motm: '0',
        fantasyTotal: '1222'
      },
    }],
    games: [{
        id: '1', 
        opposition: 'Wales', 
        score: '3-0', 
        date: '21/04/2016', 
        result: 'W'
    },{
        id: '2', 
        opposition: 'Jonny Spurving', 
        score: '2-2', 
        date: '10/05/2016', 
        result: 'D'
    }],
    rules:[{
        id: '1', 
        rule: 'Goal', 
        points: '5', 
        position: 'D',
        custom: 'No'
    },{
        id: '2', 
        rule: 'Goal pts', 
        points: '3', 
        position: 'D',
        custom: 'No'
     },{  
        id: '3', 
        rule: 'Assists', 
        points: '3', 
        position: 'D',
        custom: 'No'
     },{
        id: '4', 
        rule: 'Assist pts', 
        points: '3', 
        position: 'D',
        custom: 'No'
     },{
        id: '5', 
        rule: 'Red', 
        points: '3', 
        position: 'D',
        custom: 'No'
     },{
        id: '6', 
        rule: 'Yellow', 
        points: '3', 
        position: 'D',
        custom: 'No'
     },{
        id: '7', 
        rule: 'Card pts', 
        points: '3', 
        position: 'D',
        custom: 'No'
     },{
        id: '8', 
        rule: 'MOTM', 
        points: '3', 
        position: 'D',
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
  res.render('admin/addPlayer', { 
    title: 'Add Player',
    positions: ['Goalie', 'Defender', 'Midfielder', 'Forward', 'Sub'] });
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