var http = require('http');
var fs =require('fs');
var port = process.env.PORT || 3000;
http.createServer(function (req, res){

    res.writeHead(200, {'Content-Type' : 'text/html'});

    // var tong = call.tinhTong(3,5);
    //  var hieu = call.tinhHieu(12,9);
    //  var tich = call.tinhTich(4,6);
    //  res.end('Hello' + tong + hieu + tich);
    var url = req.url;
    if(url == '/'){
       fs.readFile('index.html', function (erro, data){
           if(erro == null){
               res.write(data);
               res.end();
           }else {
               res.end(erro);
           }
        });
    }else if (url == '/insert'){
        fs.writeFile('test.txt','Ghi vao file thu xem',function (erro){
            if (erro == null){
                res.end('ghi thanh cong');
            }else {
                res.end(erro);
            }
        })
    }else if (url == '/append') {
        fs.appendFile('test.txt','Ghi vao file lan 2',function (erro){
            if (erro == null){
                res.end('ghi thanh cong');
            }else {
                res.end(erro);
            }
        })
    }else if (url =='/unlink'){

        fs.unlink('test.txt',function (erro){
            if (erro == null){
                res.end('Xoa thanh cong');
            }else {
                res.end(erro);
            }
        })
    }else if (url == '/rename'){

        fs.rename('test.txt','text2.txt',function (erro){
            if (erro == null){
                res.end('Rename thanh cong');
            }else {
                res.end(erro);
            }
        })
    }else {
        res.end('404 not found');
    }



}).listen(port);
