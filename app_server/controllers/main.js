module.exports.main = function(req, res){
  res.render('index', { 
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