import http = require('http');

var fs = require('fs'),
    path = require('path'),
    filePath = path.join(__dirname, 'wwwroot');

var port = process.env.port || 1337;

http.createServer(function (req, response) {
    var url = req.url;
    var questionMark = req.url.indexOf('?');

    if (questionMark > 0) {
        url = url.substr(0, questionMark);
    } 

    var dotMark = url.lastIndexOf('.');

    if (url === '/' || dotMark < 0)
        url = 'index.html';
        
    fs.readFile(path.join(filePath, url), { encoding: 'utf-8' }, function (err, data) {
        if (!err) {
            // console.log('received data: ' + data);
            var contentType = getContentType(url);
                
            response.writeHead(200, { 'Content-Type': contentType });
            response.write(data);
            response.end();
        } else {
            response.writeHead(200, { 'Content-Type': 'text/plain' });
            response.end('Error in reading Index.html\n');
        }
    });

}).listen(port);

function getContentType(url) {
    var suffix = url.substr(url.lastIndexOf('.') + 1).toLowerCase();
    var contentType = '';
    switch (suffix) {
        case 'js':
            return 'application/javascript';
        case 'json':
            return 'application/json';
            // return 'application / x - www - form - urlencoded';
        case 'xml':
            return 'application/xml';
        case 'zip':
            return 'application/zip';
        case 'pdf':
            return 'application/pdf';
            //return 'application / sql';
            //return 'application / msword(.doc)';
            // return 'application / vnd.ms - excel(.xls)';
            // return 'application / vnd.openxmlformats - officedocument.spreadsheetml.sheet(.xlsx)';
            // return 'application / vnd.ms - powerpoint(.ppt)';
            // return 'application / vnd.openxmlformats - officedocument.presentationml.presentation(.pptx)';
            // return 'audio / mpeg';
            // return 'audio / vorbis';            
        case 'png':
            return 'image/png';
        case 'jpeg':
        case 'jpg':
            return 'image/jpeg';
        case 'gif':
            return 'image/gif';
        case 'css':
            return 'text/css';
        // To Do
        // return 'multipart / form - data';
        case 'htm':
        case 'html':
        default:
            return 'text/html';          
            
    }

}

