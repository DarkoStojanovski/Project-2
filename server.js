const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const app = express();
const logger = require('./middleware/logger');
const members = require('./Members');
const axios = require('axios');





// Init middleware
// app.use(logger);

//Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
 


//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//static folder
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static("public"));
//random joke
function getRandomJoke(){


return axios({
    "method":"GET",
    "url":"https://joke3.p.rapidapi.com/v1/joke",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"joke3.p.rapidapi.com",
    "x-rapidapi-key":"d0fe88923bmshfc273a95999dcd5p108aa6jsn09f433ac6629",
    "useQueryString":true
    }
    })
    .then((response)=>{
      return (response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
}

//home page rout
app.get('/', async (req, res) => {
var randomJoke = await getRandomJoke();
res.render('index', {
    title: 'Member Joke App',
    members,
    randomJoke
});
});

//Members API Routes

app.use('/api/jokes', require('./routes/api/jokes'));
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


