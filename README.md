# Welcome to My First Backend
***

## Task
 
Goal is to create a simple backend app using express and node. 
app must have several page :
- 20 song from sinatra
- sinatra birthdate
- sinatra birthplace
- sinatra's wife
- a picture of sinatra
- a public page
- a protected page
## Description
  
Middleware functions are similar to promises.<br/> 
it is an in-between process set in the middle of a request object and response object. 

Middleware functions are triggered sequentially (top to bottom).<br/>
They operate until the process exits, or the response has been sent back to the client.

 in order to create a basic page there is three point to follow : 

-call for the desired module :
```javascript
    const express = require('express');
    const app = express();
```
-Create a page using .get :
```javascript
    app.get("/test", (req, res)=> {
        let test = "test" 
        res.send(test);
    });
```
-Create a server on specific port using .listen :
```javascript
    app.listen(8080, () => {
        console.log("listening on port 8080");
    })
```
## Installation
 
if needed you'll have to use the terminal and install modules by typing:
- npn install express@4.18.1 
- npm install express-basic-auth@1.2.1

you can check protected page by entering following comand the terminal:
- curl -i  http://localhost:8080/protected --user "admin:admin" 
- curl -i  http://localhost:8080/protected
## Usage
 
<br/>Server will be accessible at this URL:
<br/>XXXXXXXXX is your docode ID
<br/>http://web-XXXXXXXXX.docode.YYYY.qwasar.io

### The Core Team


<span><i>Made at <a href='https://qwasar.io'>Qwasar Silicon Valley</a></i></span>
<span><img alt='Qwasar Silicon Valley Logo' src='https://storage.googleapis.com/qwasar-public/qwasar-logo_50x50.png' width='20px'></span>
