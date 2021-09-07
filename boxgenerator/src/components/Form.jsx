import React, {useState} from 'react'

const Form = (props) => {

    const [color, setColor] = useState("")

    const {addNewBox} = props; //Deconstruct

    const createBox = (event) => {
        event.preventDefault() // To stop the page from refreshing 

        const newBox = { // Creating the object to add to the array
            color: color // Make sure all of the attributes are included
        }
        setColor(newBox);   // blue
        event.target[0].value = "" // Set the original value to "" NINJA BONUS, clears the input field
        
        addNewBox(newBox); // takes in a box object
    }




    return (
        <fieldset>
            <legend>Form</legend>
            <form onSubmit={createBox}>
                <div>
                    <label>Color: </label>
                    <input type="color" onChange={(event) => setColor(event.target.value)}/> 
                    <button>Add Box</button>
                </div>
            </form> 
        </fieldset>
    )
}

export default Form
