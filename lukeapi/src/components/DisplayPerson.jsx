import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';


const DisplayPerson = (props) => {

    const {id} = useParams(); // Deconstructing the variable we passed from the route. EX /:id 

    useEffect(() => {axiosStarWars()}, [id]) // Calling on our axiosStarWars function to run every time the [id] changes
    const [peopleInfo, setPeopleInfo] = useState([]); // Setting the state to the current person object 
    const [notFound, setNotFound] = useState(false) // If the object is found the default is false, later we use a ternary to display an error

    const axiosStarWars = () => { // Creating the function to axios.get the API and pass in the current id from useParams();
        axios.get(`https://swapi.dev/api/people/${id}`) // GET request
        .then( response =>{  // The response comes back and axios wraps it in .data
            setPeopleInfo(response.data);
            setNotFound(false); // Setting the notFound state to flase because we did find an object
        })
        .catch(err => setNotFound(true)); // If the object is not found with the GET API request change the setNotFound to TRUE
    }

    const content = ( // Creating a variable to hold our HTML
        (notFound) ? // Ternary that will return different HTML based on if it is set to TRUE or FALSE, first case is if the Ternary is TRUE, display the error HTML
        <div>
            <h1>These are not the droids you are looking for!</h1>
            <img src="https://www.giantbomb.com/a/uploads/original/0/6279/692288-obiwan_hood.jpg" alt="error" />
        </div>
        :
        <div>
            <h1>Name:{peopleInfo.name}</h1>
            <h1>Height: {peopleInfo.height}</h1>
            <h1>Mass: {peopleInfo.mass}</h1>
            <h1>Hair Color:{peopleInfo.hair_color}</h1>
            <h1>Skin Color: {peopleInfo.skin_color}</h1>
        </div>
    )
    return (
        <fieldset>
            <legend>Display Person</legend>
    {/* This is our return for the display component, which is set to the content const we created above! */}
                {content}
        </fieldset>
    )
}
export default DisplayPerson
