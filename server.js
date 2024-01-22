const path = require('path');
require('dotenv').config();
const express = require('express');

const app = express();
const port = 3001;
const environment = "production";

console.log(process.env.NODE_ENV);
app.get('/api/whoami', (req, res) => {
    // TODO: return something useful
    console.log("/api/whoami request");
    res.json(
      [
        {"id":1,"username":"John Doe"},
        {"id":2,"username":"Don Joeh"}
      ]
    );
})

/*
If environment is not local (typically prod or test, on a server),
then the server will serve up the contents of the build folder
*/

if (environment != "local") {
  app.use(express.static(path.join(__dirname, 'client/dist')));
  app.get('*', (req, res) => {
    console.log("main")
    res.sendFile(path.join(__dirname + '/client/dist/index.html'));
  });
}

app.listen(port, () => {
    console.log(`Server listening on port ${port} in environment ${environment}`)
})
