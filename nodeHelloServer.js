//Copyright 2013-2014 Amazon.com, Inc. or its affiliates. All Rights Reserved.
//Licensed under the Apache License, Version 2.0 (the "License"). 
//You may not use this file except in compliance with the License. 
//A copy of the License is located at
//
//    http://aws.amazon.com/apache2.0/
//
//or in the "license" file accompanying this file. This file is distributed 
//on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, 
//either express or implied. See the License for the specific language 
//governing permissions and limitations under the License.


var requireF = function (modulePath) {// force require
    try {
     return(require(modulePath));
    }
    catch (e) {
     console.log('requireF(): The file "' + modulePath + '" couldn\'t be loaded.');
      return(null);
    }
}

//Get modules.
var express = require('express');
//var routes = require('./routes');
var http = require('http');
var path = require('path');
var fs = require('fs');
var AWS = requireF('aws-sdk'); // try to get this module
var app = express();

var expressSession = require('express-session');



app.set('port', process.env.PORT || 9000); // launch browser to localhost:9000 to talk to this server
app.set('views', __dirname + '/views'); // our pug pages must be in the "views" folder
app.set('view engine', 'pug'); // our view engine is using .pug (not .html)

//
// USE
//

app.use(express.favicon("hand-o-peace.ico")); // we'll look for this .ico in the home folder for the webpages
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public'))); // be sure the public folder is used - jquery, bootstrap, etc.
app.use(express.cookieParser());

app.use(expressSession({secret: 'nodeHello1234', resave: true, saveUninitialized:true}));


app.use(app.router);


app.locals.theme = process.env.THEME; //Make the THEME environment variable available to the app.

 
//
// HOME PAGE
//

  app.get('/', function(req, res){
      
      res.render('nodeHelloHome', // render nodeHelloHome.pug in the views folder
                 {
                  showFooter: true,
                 }
                ); 
    
  });
  
  
  
//
// HOME ALTERNATIVE
//
  
  app.get('/home', function(req, res){
    res.redirect('/');
  });
  

  
//
// APP LAUNCH
//

http.createServer(app).listen(app.get('port'), function(){
  console.log('\n\nExpress server listening on port ' + app.get('port'));
  console.log("\n\n**** Launch your web browser now and type in: \'localhost:9000\' as the URL, to talk to this server...");
  console.log("**** If you've done everything correctly, \n**** ... you should see a \"Node Hello\" message on a simple web page displayed.");
  console.log("**** Also check your browser's javascript console.... \n**** ...you should see a message there as well from the javascript\n*** ...  that lives in the helloNode.pug code in the views folder.")
});
