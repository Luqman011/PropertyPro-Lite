const express = require('express');
const bodyParser = require('body-parser');


const app = express();
// configure app for body parser /

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// set up port for server to listen on//

const PORT = process.env.PORT || 3000;

// set up routes//

const router = express.Router();

// all routes will be prefixed with /api //

app.use('/api', router);

// test route /
router.get('/', function (req, res) {
  res.json({ message: 'Welcome to my API!' });
});

// fire up server//

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
// print a message to console .

console.log('Server listening on port' + PORT);