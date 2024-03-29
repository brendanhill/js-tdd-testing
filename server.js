//setup Dependencies
var connect = require('connect'),
	express = require('express'),
	port = (process.env.PORT || 8090);

//Setup Express
var server = express.createServer();
server.configure(function(){
    server.set('views', __dirname + '/views');
    server.set('view options', { layout: false });
    server.use(connect.bodyParser());
    server.use(express.cookieParser());
    server.use(express.session({ secret: "shhhhhhhhh!"}));
    server.use(connect.static(__dirname + '/public'));
    server.use(server.router);
});

//setup the errors
server.error(function(err, req, res, next){
    if (err instanceof NotFound) {
        res.render('404.jade', { locals: { 
                  title : '404 - Not Found'
                 ,description: ''
                 ,author: ''
                 ,analyticssiteid: 'XXXXXXX' 
                },status: 404 });
    } else {
        res.render('500.jade', { locals: { 
                  title : 'The Server Encountered an Error'
                 ,description: ''
                 ,author: ''
                 ,analyticssiteid: 'XXXXXXX'
                 ,error: err 
                },status: 500 });
    }
});
server.listen(port);



///////////////////////////////////////////
//              Routes                   //
///////////////////////////////////////////

/////// ADD ALL YOUR ROUTES HERE  /////////

server.get('/', function(req,res){
  res.render('index.jade', {
    locals : { 
              title : 'Your Page Title'
             ,description: 'Your Page Description'
             ,author: 'Your Name'
             ,analyticssiteid: 'XXXXXXX' 
            }
  });
});

server.get('/unittest', function(req,res){
  res.render('unittest.jade', {
    locals : { 
              title : 'Testing'
            }
  });
});

// server.get('/post/:post_id', function(req, res) {
//     res.header('Content-Type', 'application/json');
//     var found = false;
//     for (var i = 0; i < postArray.length; i++) {
//         if (postArray[i].id == req.param('post_id')) {
//             res.send(JSON.stringify(postArray[i]));
//             found = true;
//         }
//     };
//     if (!found) {
//         res.send(JSON.stringify({err: 1}));
//     }
// });

// server.get('/posts', function(req, res) {
//     res.header('Content-Type', 'application/json');
//     res.send(JSON.stringify(postArray));
// });


//A Route for Creating a 500 Error (Useful to keep around)
server.get('/500', function(req, res){
    throw new Error('This is a 500 Error');
});

//The 404 Route (ALWAYS Keep this as the last route)
server.get('/*', function(req, res){
    throw new NotFound;
});

function NotFound(msg){
    this.name = 'NotFound';
    Error.call(this, msg);
    Error.captureStackTrace(this, arguments.callee);
}


console.log('Listening on http://0.0.0.0:' + port );


