let http = require('http');
let url = require('url');
let fs = require('fs');

http.createServer((req,res)=>{
    let query = url.parse(req.url,true);
    if(query.pathname == '/'){
        query.pathname += 'index.html'
    }
    let fileName = '.' + query.pathname;
    fs.readFile(fileName,(err,data)=>{
        if(err){
            fs.readFile('404.html',(err,data)=>{
                res.writeHead(404,{'content-type':'text/html'});
                res.write(data);
                return res.end();
            })
        }else{
            res.writeHead(200,{'content-type':'text/html'});
            res.write(data)
            res.end();
        }
        
    })
}).listen(8080)