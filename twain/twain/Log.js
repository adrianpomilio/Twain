   function createLog( req ){

       var log = {};
       if( req.method === "GET" ){
           log.app = req.query.app;
           log.level = req.query.level;
           log.error = req.query.error;

       }else if ( req.method === "POST" ) {
           log.app = req.body.app;
           log.level = req.body.level;
           log.error = req.body.error;
       }else {
           console.log('GET or POST Greedy Smurf');
       }


       log.method = req.method;
       log.client = req.headers;
       log.ts = new Date();


       return log;
   }



module.exports.createLog = createLog;