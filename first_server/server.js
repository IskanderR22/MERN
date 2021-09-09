

const express = require("express"); // Same thing as import express from 'express'

const app = express(); // express is a function and we need to save it to a var/const

const port = 8000; // Can be any port just make sure it is available

// Middleware------------
// make sure these lines are above any app.get or app.post code blocks
app.use(express.json()) // Accept and use json data
app.use( express.urlencoded({ extended: true }) );  // POST request line 


// we can hard code some users like this
// later on we will want to store users in a database
const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];
    
app.get("/api/users", (request, response) => {
    response.json( users );
});

app.get("/api/users/:id", (request, response) => {
    console.log(request.params);
    const {id} = request.params; // Grabbing the id from params
    request.json({
        your_id: id,
        status: "ok",
        user: users[id]
    })
});



// Routes to my API --------
app.get("/api", (request, response) => {  // The GET request requires a route and a callback function that takes in a request and response
    console.log("Hello"); // Console.logs will show in the terminal not on the actualy inspect tool
    response.send("hello from server.js");
})

app.get("/api/json", (request, response) => {
    response.json({status: "ok"})
})



// This needs to be below the other code blocks always
app.listen( port, () => {
    console.log(`Server started on: ${port} and is listening for REQuests to RESpond to`) 
});