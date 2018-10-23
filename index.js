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

console.log('Answer: ' + diff['팝콘']['강냉이']); //// debugging

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
    
    //var NNG = request.body.queryResult.parameters['NNG'];
    //var NNG1 = request.body.queryResult.parameters['NNG1'];
    //var VXV = request.body.queryResult.parameters['VXV'];
    //var VV  = request.body.queryResult.parameters['VV'];
    //var MAG = request.body.queryResult.parameters['MAG'];
    //var NP  = request.body.queryResult.parameters['NP']; //                  here
    
    let action = (request.body.result.action) ? request.body.result.action: 'default';

    console.log('action: \n' + JSON.stringify(action));
    if(JSON.stringify(action) == 'diff'){
    var NNG = request.body.queryResult.parameters['NNG'];
    var NNG1 = request.body.queryResult.parameters['NNG1'];
    }
    
    
    const actionHandlers = {
        'diff': () => {
            let responseToUser = { fulfillmentText: diff[NNG][NNG1]};
            sendResponse(responseToUser);
        },
        'how': () => {
            let responseToUser = { fulfillmentText: how[NNG][VV]};
            sendResponse(responseToUser);
        },
        'how_neg': () => {
            let responseToUser = { fulfillmentText: how_neg[NNG][VV][VXV]};
            sendResponse(responseToUser);
        },
        'what': () => {
            let responseToUser = { fulfillmentText: what[NNG][NNG1][NP]};
            sendResponse(responseToUser);
        },
        'why': () => {
            let responseToUser = { fulfillmentText: why[NNG][MAG][NNG1]};
            sendResponse(responseToUser);
        },
        'why_neg': () => {
            let responseToUser = { fulfillmentText: why_neg[NNG][MAG][NNG1][VV][VXV]};
            sendResponse(responseToUser);
        },
        'YN': () => {
            let responseToUser = { fulfillmentText: yno[NNG][NNG1][VV]};
            sendResponse(responseToUser);
        },
        
        'default': () => {
            let responseToUser = { fulfillmentText: '0' };
            sendResponse(responseToUser);
        }
    };
    
    if (!actionHandlers[action]) {
         action = 'default';
    }

    actionHandlers[action]();
    
    function sendResponse(responseToUser) {
        if (typeof responseToUser === 'string') {
            let responseJson = { fulfillmentText: responseToUser };
            response.json(responseJson);
        }
        else {
            let responseJson = {};
            responseJson.fulfillmentText = responseToUser.fulfillmentText;
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