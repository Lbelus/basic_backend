/* npm list -g
├── cookie-parser@1.4.6
├── corepack@0.10.0
├── express-basic-auth@1.2.1 <---- npm install if needed
├── express-session@1.17.3
├── express@4.18.1 <---- npm install if needed
├── npm@8.1.2
├── sqlite3@5.0.8
├── uglify-es@3.3.9
└── yarn@1.22.18
*/
//https://www.npmjs.com/package/express-basic-auth

// request express 
const express = require('express');
const app = express();
const basicAuth = require('express-basic-auth')
const router = express.Router()

//-----------------------------------------------
// Static User(s) 
//challenge = popup
// the realm identifies the system to authenticate against and can be used by clients to save credentials
const staticUserAuth = basicAuth({
    users: { 'admin': 'admin' },
    challenge: true,
    realm: 'Imb4T3st4pp',
})

//check with curl -i  http://localhost:8080/protected --user "admin:admin" 

//-------------------------------------

// a middleware function with no mount path. This code is executed for every request to the router
//log time on each request
router.use((req, res, next) => {
    console.log('Time:', Date.now())
    next()
  })

// mount the router on the app
app.use('/', router)


//-------------------------------------


// get content
//get random song
app.get("/", (req, res) => {
    let song =[
        "When You're Smiling", 
        "The Girl from Ipanema", 
        "That's Life", 
        "All My Tomorrows", 
        "The Boys Night Out", 
        "But None Like You", 
        "Can't You Just See Yourself?", 
        "California", 
        "The Best is Yet to Come", 
        "The Best of Everything",
        "As Long as I Live",
        "Around the World",
        "As Time Goes By",
        "Before the Music Ends",
        "Dream Away",
        "Every Day of My Life",
        "Devil May Care",
        "For a While",
        "But Not for Me",
        "I Couldn't Care Less"
    ];
    let rand = Math.floor(Math.random()* 20); // between 0 and 19 
    let myPick = song[rand];
    res.send(myPick); 
});

//get sinatra's birthdate
app.get("/birthdate", (req, res)=> {
    let birthDate = "12/12/1915";
    res.send(birthDate);
});

//get sinatra's birthplace
app.get("/birthplace", (req, res)=> {
    let birthPlace = "Hoboken, New Jersey";
    res.send(birthPlace);
    });

//get sinatra's wifes
app.get("/wifes", (req, res)=> {
    let wifes = ["Nancy Sinatra", "Ava Gardner", "Mia Farrow", "Barbara Marx"];
    res.send(wifes.toString().replace(/,/g, ', '));
    });

//get sinatra's picture
app.get("/picture", (req, res)=> {
    let img = `<img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Frank_Sinatra_%2757.jpg">`;
    res.send(img);
    });
//-----------------------------------------------
// security public/private
app.get("/public", (req, res)=> {
    let publicWelcome = "Everybody can see this page" 
    res.send(publicWelcome);
    });

    app.get('/protected', staticUserAuth, function(req, res) {
        res.status(200).send('Welcome, authenticated client')
    })

//listen :Create a server on specific port using
app.listen(8080, () => {
    console.log("listening on port 8080");
    })
