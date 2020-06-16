const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const app = express();
const logger = require('./middleware/logger');
const members = require('./Members');
const axios = require('axios');
const db = require('./models');





// Init middleware
// app.use(logger);

//Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
 


//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//static folder
app.use(express.static(path.join(__dirname, 'public')));

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
var members = await db.Member.findAll();
    var newMembers = members.map(m => m.dataValues);
    var savedJokes = await db.Userjoke.findAll({include: { model: db.Member}});
   
    savedJokes = savedJokes.map(sj => {
        // var userdata = await db.Member.findOne({
        //     where: {id: parseInt(sj.dataValues.userid)}
            
        // });
        console.log(sj.dataValues.name);
        if (!sj)
        return {};
        var jokedata = {
            ...sj.dataValues,
            member: {
                // ...sj?.dataValues?.Member.dataValues[0]
            }
           
        }
       return  jokedata
    });
    console.log(savedJokes);
    res.render('index', {
        title: 'Member Joke App',
        members: newMembers,
        savedJokes, 
        randomJoke
    });


});

//Members API Routes

app.use('/api/jokes', require('./routes/api/jokes'));
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 3000;
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("App now listening on port:", PORT);
    })
})