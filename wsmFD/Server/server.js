const https = require('https');
const fs = require('fs');
var url = require('url');

const options = {
    key: fs.readFileSync("../server.key"),
    cert: fs.readFileSync("../server.cert")
};

https.createServer(options, (req, response) => {
    console.log("[Request]: "+ req.url);
    var q = url.parse(req.url,true);
    console.log("q: "+ q);
    fs.readFile("."+q.pathname,function(err,data){
        if(err){
            response.writeHead(404,{'Content-Type':'text/html'});
            return response.end("404 Not Found");
        }
        if(q.pathname.includes(".html")){
            response.writeHead(200,{'Content-Type':'text/html'});
        }
        else if(q.pathname.includes(".css")){
            response.writeHead(200,{'Content-Type':'text/css'});
        }
        else if(q.pathname.includes(".js")){
            response.writeHead(200,{'Content-Type':'text/javascript'});
        }
        else if(q.pathname.includes(".jpg")){
            response.writeHead(200,{'Content-Type':'image/jpeg'});
        }
        else{
            response.writeHead(200);
        }
        response.write(data);
        return response.end();
    })
}).listen(8000, function() {
    console.log("["+ new Date()+"]" + "Server is listening on port 8000");
});


