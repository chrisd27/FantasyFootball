var request = require('request');
var apiOptions = {
  server : "http://localhost:3000"
};

// TODO change URL
if (process.env.NODE_ENV === 'production') {
  apiOptions.server = "https://getting-mean-loc8r.herokuapp.com";
}

/* Get "view game" page */
module.exports.viewGame = function(req, res){
  res.render("details/viewGames", { 
    title: "View game",
    game: {
      id: "1",
      oppositionName: "CPR A",
      date: "21st September",
      score: "2-1",
      matchReport: "we won!"
    }

   });
};

/* Render playerlist */
var renderPlayerList = function(req, res, responseBody){
  res.render("details/viewPlayers", { 
    title: "View player",
    players: responseBody });
}

/* Get "view player" page */
module.exports.viewPlayer = function(req, res){
  var requestOptions, path;
  path = '/api/players';
  requestOptions = {
    url: apiOptions.server + path,
    method: "GET",
    json: {}
  };
  request(
    requestOptions,
    function(err, response, body){
      renderPlayerList(req, res, body);
    }
  )
};


/* Render renderRulesList */
var renderRulesList = function(req, res, responseBody){
  res.render("details/viewRules", { 
    title: "View rules",
    rules: responseBody });
}

/* Get "view rule" page */
module.exports.viewRules = function(req, res){
   var requestOptions, path;
  path = '/api/rules';
  requestOptions = {
    url: apiOptions.server + path,
    method: "GET",
    json: {}
  };
  request(
    requestOptions,
    function(err, response, body){
      renderRulesList(req, res, body);
    }
  )
};

/* Render teamList */
var renderTeamsList = function(req, res, responseBody){
  res.render("details/viewTeams", { 
    title: "View teams",
    teams: responseBody });
}

/* Get "view team" page */
module.exports.viewTeams = function(req, res){
   var requestOptions, path;
  path = '/api/teams';
  requestOptions = {
    url: apiOptions.server + path,
    method: "GET",
    json: {}
  };
  request(
    requestOptions,
    function(err, response, body){
      renderTeamsList(req, res, body);
    }
  )
};