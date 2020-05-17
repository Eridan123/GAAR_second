
//Install express server
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/<name-on-package.json>'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/<name-on-package.json>/'}
);
});

app.listen(process.env.PORT || 8080);
