var express = require("express");
const { HLTV } = require('hltv');

var app = express();

app.get("/matches", (req, res, next) => {
  HLTV.getMatches().then((response) => {
    res.json(response);
  })
});

app.get("/match/:id", (req, res, next) => {
  HLTV.getMatch({id: req.params.id}).then((response) => {
    res.json(response);
  })
});

app.get("/matchesStats/:startDate/:endDate/:matchType", (req, res, next) => {
  HLTV.getMatchesStats({startDate: req.params.startDate, endDate: req.params.endDate, matchType: req.params.matchType}).then((response) => {
    res.json(response);
  })
});

app.get("/matchStats/:id", (req, res, next) => {
  HLTV.getMatchStats({id: req.params.id}).then((response) => {
    res.json(response);
  })
});

app.get("/matchMapStats/:id", (req, res, next) => {
  HLTV.getMatchMapStats({id: req.params.id}).then((response) => {
    res.json(response);
  })
});

app.get("/results/:pages", (req, res, next) => {
  HLTV.getResults({pages: req.params.id}).then((response) => {
    res.json(response);
  })
});

app.get("/rankings/", (req, res, next) => {
  HLTV.getTeamRanking().then((response) => {
    res.json(response);
  })
});

app.get("/getTeam/:id", (req, res, next) => {
  HLTV.getTeam({id: req.params.id}).then(response => {
    res.json(response);
  })
});


app.get("/getTeamStats/:id", (req, res, next) => {
  HLTV.getTeamStats({id: req.params.id}).then(response => {
    res.json(response);
  })
});

app.get("/getPlayer/:id", (req, res, next) => {
  HLTV.getPlayer({id: req.params.id}).then(response => {
    res.json(response);
  })
});

app.get("/getPlayerStats/:id", (req, res, next) => {
  HLTV.getPlayerStats({id: req.params.id}).then(response => {
    res.json(response);
  })
});

app.get("/getPlayerRanking/:id", (req, res, next) => {
  HLTV.getPlayerRanking().then(response => {
    res.json(response);
  })
});

app.get("/getEvent/:id", (req, res, next) => {
  HLTV.getEvent({id: req.params.id}).then(response => {
    res.json(response);
  })
});

const port=process.env.PORT || 3000

app.listen(port, () => {
 console.log("Server running on port " + port);
});
