"use strict"

var express = require('express'); //
var app = express(); //
//// var server = require('http').createServer(app);
//// var port = process.argv[2] || 5000;

app.listen(process.env.PORT || 5000, function () {
    console.log('Server listening');
    ////console.log('Server listening at port %d', port);
    ////console.log('Server dirname : ', __dirname);
});

var bodyParser = require('body-parser'); //
//// app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json()); //
app.use(bodyParser.urlencoded({ extended: true })); //


var fs = require('fs');
var what = JSON.parse(fs.readFileSync('what.json', 'utf8'));
var why = JSON.parse(fs.readFileSync('why.json', 'utf8'));
var why_neg = JSON.parse(fs.readFileSync('why_neg.json', 'utf8'));
var yno = JSON.parse(fs.readFileSync('YN.json', 'utf8'));
var how = JSON.parse(fs.readFileSync('how.json', 'utf8'));
var how_neg = JSON.parse(fs.readFileSync('how_neg.json', 'utf8'));
var diff = JSON.parse(fs.readFileSync('diff.json', 'utf8'));

console.log('Answer: ' + yno['북극,남극']['먼저,발견']['됐나']); //// debugging

// app.post('/', function(req, res){
//   var speech = 
//       req.body.queryResult &&
//       req.body.queryResult.parameters &&
//       req.body.queryresult.parameters.echoText  
//       ? req.body.queryresult.parameters.echoText  
//       : "Seems like some problem. Speak again.";
//   return res.json({
//     speech: speech,
//     displayText: speech,
//     source: "museum-bot"
//   });
// });


//app.all('/', function(req, res){
//app.get('/', function(req, res){


app.post('/', function (request, response) {
    console.log('request: \n' + JSON.stringify(request.body));
    //var item = req.body.result.parameters['item'];
    
    var NNG;// = request.body.queryResult.parameters['NNG'];
    var NNG1;// = request.body.queryResult.parameters['NNG1'];
    var VXV;// = request.body.queryResult.parameters['VXV'];
    var VV;//  = request.body.queryResult.parameters['VV'];
    var MAG;// = request.body.queryResult.parameters['MAG'];
    var NP;//  = request.body.queryResult.parameters['NP']; //                  here
    
    let action = (request.body.result.action) ? request.body.result.action: 'default';

    if(JSON.stringify(action) == '"diff"'){
      console.log('action == diff: \n');
      NNG = request.body.result.parameters['NNG'];
      NNG1 = request.body.result.parameters['NNG1'];
    NNG = JSON.stringify(NNG).replace(/\[|\]|"|\s/g, "");
    NNG1 = JSON.stringify(NNG1).replace(/\[|\]|"|\s/g, "");
      }
    if(JSON.stringify(action) == '"what"'){
      console.log('action == what: \n');
      NNG = request.body.result.parameters['NNG'];
      NNG1 = request.body.result.parameters['NNG1'];
      NP = request.body.result.parameters['NP'];
    NNG = JSON.stringify(NNG).replace(/\[|\]|"|\s/g, "");
    NNG1 = JSON.stringify(NNG1).replace(/\[|\]|"|\s/g, "");
    NP = JSON.stringify(NP).replace(/\[|\]|"|\s/g, "");
      }
    if(JSON.stringify(action) == '"why"'){
      console.log('action == why: \n');
      NNG = request.body.result.parameters['NNG'];
      MAG = request.body.result.parameters['MAG'];
      NNG1 = request.body.result.parameters['NNG1'];
      VV = request.body.result.parameters['VV'];
    NNG = JSON.stringify(NNG).replace(/\[|\]|"|\s/g, "");
    NNG1 = JSON.stringify(NNG1).replace(/\[|\]|"|\s/g, "");
    VV = JSON.stringify(VV).replace(/\[|\]|"|\s/g, "");
    MAG = JSON.stringify(MAG).replace(/\[|\]|"|\s/g, "");
      }
    if(JSON.stringify(action) == '"why_neg"'){
      console.log('action == why_neg: \n');
      NNG = request.body.result.parameters['NNG'];
      MAG = request.body.result.parameters['MAG'];
      NNG1 = request.body.result.parameters['NNG1'];
      VV = request.body.result.parameters['VV'];
      VXV = request.body.result.parameters['VXV'];
    NNG = JSON.stringify(NNG).replace(/\[|\]|"|\s/g, "");
    NNG1 = JSON.stringify(NNG1).replace(/\[|\]|"|\s/g, "");
    VV = JSON.stringify(VV).replace(/\[|\]|"|\s/g, "");
    MAG = JSON.stringify(MAG).replace(/\[|\]|"|\s/g, "");
    VXV = JSON.stringify(VXV).replace(/\[|\]|"|\s/g, "");
      }
    if(JSON.stringify(action) == '"how"'){
      console.log('action == how: \n');
      NNG = request.body.result.parameters['NNG'];
      VV = request.body.result.parameters['VV'];
    NNG = JSON.stringify(NNG).replace(/\[|\]|"|\s/g, "");
    VV = JSON.stringify(VV).replace(/\[|\]|"|\s/g, "");
      }
    if(JSON.stringify(action) == '"how_neg"'){
      console.log('action == how_neg: \n');
      NNG = request.body.result.parameters['NNG'];
      VV = request.body.result.parameters['VV'];
      VXV = request.body.result.parameters['VXV'];
    NNG = JSON.stringify(NNG).replace(/\[|\]|"|\s/g, "");
    VV = JSON.stringify(VV).replace(/\[|\]|"|\s/g, "");
    VXV = JSON.stringify(VXV).replace(/\[|\]|"|\s/g, "");
      }
    if(JSON.stringify(action) == '"YN"'){
      console.log('action == YN: \n');
      NNG = request.body.result.parameters['NNG'];
      NNG1 = request.body.result.parameters['NNG1'];
      VV = request.body.result.parameters['VV'];
    NNG = JSON.stringify(NNG).replace(/\[|\]|"|\s/g, "");
    NNG1 = JSON.stringify(NNG1).replace(/\[|\]|"|\s/g, "");
    VV = JSON.stringify(VV).replace(/\[|\]|"|\s/g, "");
    }
    
    
    //NNG = JSON.stringify(NNG).replace(/\[|\]|"|\s/g, "");
    //NNG1 = JSON.stringify(NNG1).replace(/\[|\]|"|\s/g, "");
    //VXV = JSON.stringify(VXV).replace(/\[|\]|"|\s/g, "");
    //VV = JSON.stringify(VV).replace(/\[|\]|"|\s/g, "");
    //MAG = JSON.stringify(MAG).replace(/\[|\]|"|\s/g, "");
    //NP = JSON.stringify(NP).replace(/\[|\]|"|\s/g, "");
    
    
    
    const actionHandlers = {
        'diff': () => {
            let responseToUser = { speech: diff[NNG][NNG1]};
            sendResponse(responseToUser);
        },
        'how': () => {
            let responseToUser = { speech: how[NNG][VV]};
            sendResponse(responseToUser);
        },
        'how_neg': () => {
            let responseToUser = { speech: how_neg[NNG][VV][VXV]};
            sendResponse(responseToUser);
        },
        'what': () => {
            let responseToUser = { speech: what[NNG][NNG1][NP]};
            sendResponse(responseToUser);
        },
        'why': () => {
            let responseToUser = { speech: why[NNG][MAG][NNG1][VV]};
            sendResponse(responseToUser);
        },
        'why_neg': () => {
            let responseToUser = { speech: why_neg[NNG][MAG][NNG1][VV][VXV]};
            sendResponse(responseToUser);
        },
        'YN': () => {
            let responseToUser = { speech: yno[NNG][NNG1][VV]};
            sendResponse(responseToUser);
        },
        
        'default': () => {
            let responseToUser = { speech: '0' };
            sendResponse(responseToUser);
        }
    };
    
    
    if (!actionHandlers[action]) {
         action = 'default';
    }

    try{
    actionHandlers[action]();
    }
    catch(err) {
        let responseToUser = { speech: '0' };
        sendResponse(responseToUser);
    }
    
    function sendResponse(responseToUser) {
        if (typeof responseToUser === 'string') {
            let responseJson = { speech: responseToUser };
            response.json(responseJson);
        }
        else {
            let responseJson = {};
            responseJson.speech = responseToUser.speech;
            if (responseToUser.fulfillmentMessages) {
                responseJson.fulfillmentMessages = responseToUser.fulfillmentMessages;
            }
            if (responseToUser.outputContexts) {
                responseJson.outputContexts = responseToUser.outputContexts;
            }
            response.json(responseJson);
        }
    }
});