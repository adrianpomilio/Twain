var express = require( 'express' ),
    http = require( 'http' ),
    app = express(),
    logger = require( './writer.js'),
    logMsg = require( './Log.js' );


app.use(express.bodyParser());

app.get( '/beacon', function( req, res ) {

    logger.writeToLog( logMsg.createLog( req ) );
    res.writeHead( 200, {'Content-Type': 'image/gif'});
    res.end();

});

app.post( '/sys', function( req, res) {
    logger.writeToLog( logMsg.createLog( req ) );

    res.writeHead( 200, {'Content-Type': 'text/plain'});
    res.end();

});

http.createServer( app).listen( 8000 );
console.log('Server running on port:8000/');
