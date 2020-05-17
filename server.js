
//Install express server
const express = require('express');
const path = require('path');
const http = require('http');
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/gaar2/'));

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname+'/dist/gaar2/index.html'));
});

const port = process.env.PORT || 8080;
app.set('port',port);

const server = http.createServer(app);
server.listen(port, () => console.log("server started!!"));
