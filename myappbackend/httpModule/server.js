const http = require('http');
const fs = require('fs');
const path = require('path');


const server = http.createServer((req,res) =>{
    try {
        if(req.url === '/' || req.url === '/index.html'){
            const filePath = path.join(__dirname, 'index.html');
            fs.readFile(filePath, (err,data) =>{
                if(err){
                    res.writeHead(500, {'content-type':'text/plain'});
                    res.end("Error No Data found");
                }else{
                    res.writeHead(200, {'content-type' : 'text/html'});
                    res.end(data);
                }
            });
        }else{
            res.writeHead(404, {'content-type' : 'text/plain'});
            res.end("Error 404 page not found?");
        }
    } catch (error) {
        console.log("Error while Creating Server", error);
    }
})


server.listen(8000, () => console.log("Server Running on port no 8000"));