import React from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router';


const Form = (props) => {

    const history = useHistory(); // Setting a history variable to the useHistory function 
    const [input1, setInput1] = useState("people"); // Setting the two inputs from our form, the select between people and planet
    const [input2, setInput2] = useState("5"); // Setting the input for the id in the form 
    


    const submitInput = (event) => { // Creating a function to pass the data into history 
    event.preventDefault(); // Doesn't allow the page to refresh 
      // do something with the data
    history.push(`/${input1}/${input2}`); // history.push will navigate us to a route via App.js, EX "/planet/:id", so select is on planet and the id of 5 is entered 
    }

    // Creating a form with the onSubmit = to the event and passing it into our function submitInput 
    // select is used for the drop down menu, name is = "input1" and the onChange will either be planet or people as the value, which is passed into history
    // input type is set to number and onChange will always include the number that is currently in the field, value = {input2} which is used in history
    // input type = "submit" will send the form to our function and history will navigate us to either the planet or person entered
    return (
    <form onSubmit={ (event) => submitInput(event) }>
        <label>Search For:</label>
        <select name ="input1" onChange={ (event) => setInput1(event.target.value) } value = {input1} >
            <option value ="people"> Peoples</option>
            <option value ="planet"> Planet</option>
        </select>
        <label>ID:</label>
        <input type="number" name = "" id ="" onChange = { (event) => setInput2(event.target.value)} value = {input2} />
        <input type="submit" value="Submit" />
    </form>
    );
}

export default Form
