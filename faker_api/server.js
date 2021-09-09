

const express = require("express"); // Same thing as import express from 'express'
const faker = require("faker");

const app = express(); // express is a function and we need to save it to a var/const

const port = 8000; // Can be any port just make sure it is available

// Middleware------------
// make sure these lines are above any app.get or app.post code blocks
app.use(express.json()) // Accept and use json data
app.use( express.urlencoded({ extended: true }) );  // POST request line 


class User {
    constructor() {
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phone = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.pass = faker.internet.password();
    }
}

class Company{
    constructor() {
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipcode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

app.get("/api/users/new", (request, response) => {
    response.json(new User())
})

app.get("/api/companies/new", (request, response) => {
    response.json(new Company())
})

app.get("/api/user/company/new", (request, response) => {
    response.json([new User(), new Company()])
})

// This needs to be below the other code blocks always
app.listen( port, () => {
    console.log(`Server started on: ${port} and is listening for REQuests to RESpond to`) 
});