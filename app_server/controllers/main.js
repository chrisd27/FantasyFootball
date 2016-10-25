var request = require('request'),
apiOptions = {
  server: "http://localhost:3000"
},
responseBody = {};

// TODO - Add production URL Heroku here
if(process.env.NODE_ENV === "production"){
  apiOptions.server = "http://localhost:3000";
}

var renderMainpage = function(req, res, respBody){

  res.render('index', { 
    title: 'Atholl 1965 Summary',
    games: respBody.games,
    players: respBody.players,
    rules: respBody.rules
   });
}


module.exports.main = function(req, res){
  var requestOptions = {}, path = {}, respCount = 0;
  
  // Games request
  path.games = "/api/games";
  requestOptions.getGames = {
    url: apiOptions.server + path.games,
    method: "GET",
    json: {},
    qs: {
      offset: 20
    }
  }

  request(requestOptions.getGames, function(err, response, body){
    respCount++;
    if(err){
       return console.log(err);
    } else if(response.statusCode === 200){
        responseBody.games = body;
        if(respCount === 3){
          renderMainpage(req, res, responseBody);
        }
    } else {
        console.log(response.statusCode);
    }
    
  });

  // Players request
  path.players = "/api/players";
  requestOptions.getPlayers = {
    url: apiOptions.server + path.players,
    method: "GET",
    json: {},
    qs: {
      offset: 20
    }
  }

  request(requestOptions.getPlayers, function(err, response, body){
    respCount++;
    if(err){
        return console.log(err);
    } else if(response.statusCode === 200){
        responseBody.players = body;
        if(respCount === 3){
          renderMainpage(req, res, responseBody);
        }
    } else {
        console.log(response.statusCode);
    }
  });

  /* Rules request
  path.rules = "/api/rules";
  requestOptions.postRules = {
    url: apiOptions.server + path.rules,
    method: "POST",
    json: {},
    qs: {
      offset: 20
    },
    form: {
      name: body.formData.name,
      gkPoints: body.formData.gkPoints,
      defPoints: body.formData.defPoints,
      midPoints: body.formData.midPoints,
      fwdPoints: body.formDatafwdPoints
    }
  }

  request(requestOptions.postRules, function(err, response, body){
    respCount++;
    if(err){
        return console.log(err);
    } else if(response.statusCode === 200){
      if(body){
        responseBody.rules = body;
        if(respCount === 3){
          renderMainpage(req, res, responseBody);
        }
      } else {
        responseBody.rules = "No rules set";
      }
    } else {
        console.log(response.statusCode);
    }
  }); */

  // Rules Post

};