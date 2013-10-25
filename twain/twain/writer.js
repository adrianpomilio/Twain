var fs = require( 'fs' );


function writeToLog( msg ) {
    var data = msg,
        date = new Date(),
        day = date.getDate(),
        month = date.getMonth()+1,
        year = date.getFullYear(),
        fileNameExtention = month+'-'+day+'-'+year,
        fileName = data.app;
    fileName += '-'
    fileName += fileNameExtention;
    fileName += '.js';

    try{
        fs.exists( 'logs/'+data.app , function( exists ) {
            if( !exists ){
                fs.mkdir( 'logs/'+data.app, function (err) {
                    if (err) throw err;
                    console.log('an error');
                } );
            }
        });

    } catch( e ) {
        console.log( e );
    }

    try{
        fs.exists('logs/'+data.app+'/'+fileName, function( exists ) {
            if( !exists ){
                fs.writeFile('logs/'+data.app+'/'+fileName, JSON.stringify( data ), function (err) {
                    if (err) throw err;
                    console.log('It\'s saved!');
                });
            }else{
                fs.appendFile('logs/'+data.app+'/'+fileName, '\n,'+ JSON.stringify( data ), function (err) {
                    if (err) throw err;
                    console.log('It\'s appended to!');
                });
            }
        });
    }catch( e ) {
        console.log( e );
    }

}

module.exports.writeToLog = writeToLog;
