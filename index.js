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
var yno = JSON.parse(fs.readFileSync('YN.json', 'utf8'));
var how = JSON.parse(fs.readFileSync('how.json', 'utf8'));
var diff = JSON.parse(fs.readFileSync('diff.json', 'utf8'));

console.log('Answer: ' + what['짜장면']['자장면']['올바']); //// debugging

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
    var XSV = request.body.queryResult.parameters['XSV'];
    var XR  = request.body.queryResult.parameters['XR'];
    var VXV = request.body.queryResult.parameters['VXV'];
    var VV  = request.body.queryResult.parameters['VV'];
    var VA  = request.body.queryResult.parameters['VA'];
    var NNP = request.body.queryResult.parameters['NNP'];
    var NNM = request.body.queryResult.parameters['NNM'];
    var NNG = request.body.queryResult.parameters['NNG'];
    var MD  = request.body.queryResult.parameters['MD'];
    var MAG = request.body.queryResult.parameters['MAG'];
    var NP  = request.body.queryResult.parameters['NP']; //                  here
    
    let action = (request.body.queryResult.action) ? request.body.queryResult.action: 'default';
    
    
    
    const actionHandlers = {
        'NNG.NNG.NNG': () => {
            let responseToUser = { fulfillmentText: yno[NNG][NNG][NNG]};
            sendResponse(responseToUser);
        },

        'NNG.NNG.VXV': () => {
            let responseToUser = { fulfillmentText: yno[NNG][NNG][VXV]};
            sendResponse(responseToUser);
        },
        
        'NNG.MAG': () => {
            let responseToUser = { fulfillmentText: why[NNG][MAG]};
            sendResponse(responseToUser);
        },

        'MAG.NNG.NNG': () => {
            let responseToUser = { fulfillmentText: why[MAG][NNG][NNG]};
            sendResponse(responseToUser);
        },

        'NNG.NNG.VV': () => {
            let responseToUser = { fulfillmentText: why[NNG][NNG][VV]};
            sendResponse(responseToUser);
        },

        'NNG.NNG': () => {
            let responseToUser = { fulfillmentText: why[NNG][NNG]};
            sendResponse(responseToUser);
        },

        'NNG.NNG.VA.NNG': () => {
            let responseToUser = { fulfillmentText: why[NNG][NNG][VA][NNG]};
            sendResponse(responseToUser);
        },

        'NNG.NNG.NNG.NNG.VA': () => {
            let responseToUser = { fulfillmentText: why[NNG][NNG][NNG][NNG][VA]};
            sendResponse(responseToUser);
        },

        'NNG.NNG.VA': () => {
            let responseToUser = { fulfillmentText: why[NNG][NNG][VA]};
            sendResponse(responseToUser);
        },

        'VA.VV.NNG': () => {
            let responseToUser = { fulfillmentText: why[VA][VV][NNG]};
            sendResponse(responseToUser);
        },

        'NNG.NNG.NNG': () => {
            let responseToUser = { fulfillmentText: why[NNG][NNG][NNG]};
            sendResponse(responseToUser);
        },

        'NNG.VA': () => {
            let responseToUser = { fulfillmentText: why[NNG][VA]};
            sendResponse(responseToUser);
        },

        'MD.NNG.NNG': () => {
            let responseToUser = { fulfillmentText: why[MD][NNG][NNG]};
            sendResponse(responseToUser);
        },

        'NNG.NNG.NNG.VV': () => {
            let responseToUser = { fulfillmentText: why[NNG][NNG][NNG][VV]};
            sendResponse(responseToUser);
        },

        'NNG.VV.NNG': () => {
            let responseToUser = { fulfillmentText: why[NNG][VV][NNG]};
            sendResponse(responseToUser);
        },

        'NNG.NNG.MAG': () => {
            let responseToUser = { fulfillmentText: why[NNG][NNG][MAG]};
            sendResponse(responseToUser);
        },

        'NNG.VV': () => {
            let responseToUser = { fulfillmentText: why[NNG][VV]};
            sendResponse(responseToUser);
        },

        'NNG.NNG.VXV': () => {
            let responseToUser = { fulfillmentText: why[NNG][NNG][VXV]};
            sendResponse(responseToUser);
        },

        'NNG.NNG.NNG.VA': () => {
            let responseToUser = { fulfillmentText: why[NNG][NNG][NNG][VA]};
            sendResponse(responseToUser);
        },

        'NNG.VA.NNG.NNG.NNG': () => {
            let responseToUser = { fulfillmentText: why[NNG][VA][NNG][NNG][NNG]};
            sendResponse(responseToUser);
        },

        'XR.NNG.VV': () => {
            let responseToUser = { fulfillmentText: why[XR][NNG][VV]};
            sendResponse(responseToUser);
        },
        
        'NNG.NNG.VA': () => {
            let responseToUser = { fulfillmentText: what[NNG][NNG][VA]};
            sendResponse(responseToUser);
        },

        'NNG.NNG.NNG': () => {
            let responseToUser = { fulfillmentText: what[NNG][NNG][NNG]};
            sendResponse(responseToUser);
        },

        'NNG.NNG.NNG.NP': () => {
            let responseToUser = { fulfillmentText: what[NNG][NNG][NNG][NP]};
            sendResponse(responseToUser);
        },

        'NNP.NNG.VV': () => {
            let responseToUser = { fulfillmentText: what[NNP][NNG][VV]};
            sendResponse(responseToUser);
        },

        'NNG.NNG': () => {
            let responseToUser = { fulfillmentText: what[NNG][NNG]};
            sendResponse(responseToUser);
        },

        'NNG.MAG.NNG.NNG': () => {
            let responseToUser = { fulfillmentText: what[NNG][MAG][NNG][NNG]};
            sendResponse(responseToUser);
        },

        'NNG.NNG.MAG.NNG': () => {
            let responseToUser = { fulfillmentText: what[NNG][NNG][MAG][NNG]};
            sendResponse(responseToUser);
        },
        
        'NNG.NNG': () => {
            let responseToUser = { fulfillmentText: how[NNG][NNG]};
            sendResponse(responseToUser);
        },

        'NNG.NNG.VA.NNG': () => {
            let responseToUser = { fulfillmentText: how[NNG][NNG][VA][NNG]};
            sendResponse(responseToUser);
        },

        'NNG.VV': () => {
            let responseToUser = { fulfillmentText: how[NNG][VV]};
            sendResponse(responseToUser);
        },

        'NNG.VA.VV': () => {
            let responseToUser = { fulfillmentText: how[NNG][VA][VV]};
            sendResponse(responseToUser);
        },

        'NNG.VV.MAG.VV': () => {
            let responseToUser = { fulfillmentText: how[NNG][VV][MAG][VV]};
            sendResponse(responseToUser);
        },

        'NNG.VV.VV': () => {
            let responseToUser = { fulfillmentText: how[NNG][VV][VV]};
            sendResponse(responseToUser);
        },

        'NNG.NNG.VV': () => {
            let responseToUser = { fulfillmentText: how[NNG][NNG][VV]};
            sendResponse(responseToUser);
        },

        'NNG.NNG.NNG': () => {
            let responseToUser = { fulfillmentText: how[NNG][NNG][NNG]};
            sendResponse(responseToUser);
        },

        'NNG.NNG.NNG.NNG': () => {
            let responseToUser = { fulfillmentText: how[NNG][NNG][NNG][NNG]};
            sendResponse(responseToUser);
        },

        'NNG.MAG': () => {
            let responseToUser = { fulfillmentText: how[NNG][MAG]};
            sendResponse(responseToUser);
        },
        
        'NNG.NNG': () => {
            let responseToUser = { fulfillmentText: diff[NNG][NNG]};
            sendResponse(responseToUser);
        },

        'NNP.NNP': () => {
            let responseToUser = { fulfillmentText: diff[NNP][NNP]};
            sendResponse(responseToUser);
        },

        'NNG.NNG.NNG.NNG': () => {
            let responseToUser = { fulfillmentText: diff[NNG][NNG][NNG][NNG]};
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