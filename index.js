const express = require('express');
const app = express();
const morgan = require('morgan');
const path=require('path');
//Character Route
const characterRoute = require('./api/routes/characters');

// app.use(morgan('dev'));
// app.set("view engine","pug");
// app.set('views',path.join(__dirname+'/views'))

const staticPath=path.join(__dirname+'./views/index.html');


app.use((req, res, next) => {
    //Giving access to anyone requesting the API
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,Authorization');

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET');
        return res.status(200).json({});
    }
    next();

});


// Default Landing Page
// app.use(express.static(staticPath));

app.get('/', (req, res) => {
   res.json({
       apiName:"Genshin Impact Characters API",
       description:"Add /characters to get the data of all the characters. While fetching use the specific index to fetch the data of the particualr character. (Note: Index starts from 0)",
       createdBy:"Anupam Dungdung",
       email:"anupam-d2@live.com"
   })
})

//Routes which should handle request
app.use('/characters', characterRoute);

//Handle every request that reaches this line
app.use((req, res, next) => {
    const error = new Error('Query Not Found');
    error.status = 404;
    // next(error);
    res.sendStatus(404).json({
        'error': 'Invalid Query'
    })
});

//Error thrown from anywhere else
app.use((error, req, res, next) => {
    res.sendStatus(error.status || 500);
    return res.json({
        error: {
            message: error.message
        }
    })
})



app.listen(process.env.PORT || 5000, () => {
    console.log("listening");
})