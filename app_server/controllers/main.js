module.exports.main = function(req, res){
  res.render('teamSummary', { 
  	title: 'Atholl 1965 Summary',
  	players: {
  		headers: {col1: 'Player name', col2: 'Fantasy Points', col3: 'Goals', col4: 'Assists'},
  		values: [{
  		  id: '1', 
  		  col1: 'Chris Davies', 
  		  col2: '9', 
  		  col3: '100', 
  		  col4: '99'
  		},{ 
  		  id: '2', 
  	      col1: 'Rich Burton',
  	      col2: '0', 
  	      col3: '-12', 
  	      col4: '-13'
  	    }]
  	},
    games: {
    	headers: {col1: 'opposition', col2: 'Score', col3: 'Match Report?', col4: 'MOTM'},
    	values: [{
  		    id: '1', 
  		    col1: 'Wales', 
  		    col2: '3-0', 
  		    col3: 'false', 
  		    col4: 'Chris Davies'
  	    },{
  	    	id: '2', 
  		    col1: 'Jonny Spurving', 
  		    col2: '2-2', 
  		    col3: 'true', 
  		    col4: 'SAB'
  		}]
  	},
  	test: 'CGRSDDHA';
  });
}	
