const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors({origin: true, credentials: true}));
app.use(express.json());
app.use(routes);

app.listen(3333, function(){
    console.log("info",'Server is running at port : ' + 3333);
});