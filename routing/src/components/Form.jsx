import React from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
const Form = (props) => {

        const [name, setName] = useState("");
        const [comment, setComment] = useState("");
        const history = useHistory();
    
        const sendSurvey = (e) => {
        e.preventDefault();
          // do something with the data
        history.push(`/result/${name}/${comment}`); // Concatinating the values from state, name and comment 
        // history is a function that says, if you do something navigate somewhere
        }



    return (
        <fieldset>
            <legend>Form.jsx</legend>
            <form onSubmit={sendSurvey}>
                <label>Your Name:</label>
                <input 
                    type="text" 
                    onChange={(e) => setName(e.target.value)} 
                    value={name} />
                <label>Your Comment:</label>
                <textarea 
                    onChange={(e) => setComment(e.target.value)} 
                    value={comment}>
                </textarea>
                <input type="submit" value="Submit Survey" />
            </form>
        </fieldset>
    )
}

export default Form
