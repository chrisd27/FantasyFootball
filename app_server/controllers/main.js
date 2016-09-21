module.exports.main = function(req, res){
  res.render('index', { 
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
        position: 'Defender',
        custom: 'No'
     },{
        id: '4', 
        rule: 'Assist pts', 
        points: '3', 
        position: 'Defender',
        custom: 'No'
     },{
        id: '5', 
        rule: 'Red', 
        points: '3', 
        position: 'Defender',
        custom: 'No'
     },{
        id: '6', 
        rule: 'Yellow', 
        points: '3', 
        position: 'Defender',
        custom: 'No'
     },{
        id: '7', 
        rule: 'Card pts', 
        points: '3', 
        position: 'Defender',
        custom: 'No'
     },{
        id: '8', 
        rule: 'MOTM', 
        points: '3', 
        position: 'Defender',
        custom: 'No'
     }],
   });
};