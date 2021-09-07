import React, {useState} from 'react'

const Form = (props) => {

    const [color, setColor] = useState("")

    const {addNewBox} = props; //Deconstruct

    const createBox = (event) => {
        event.preventDefault()

        const newBox = {
            color
        }
        setColor(newBox);   // blue
        event.target[0].value = "" // Set the original value to "" NINJA BONUS
        
        addNewBox(newBox); // takes in a box object
    }




    return (
        <fieldset>
            <legend>Form</legend>
            <form onSubmit={createBox}>
                <div>
                    <label>Color: </label>
                    <input type="text" onChange={(event) => setColor(event.target.value)} />
                    <input type="submit" value="Add" />
                </div>
            </form> 
        </fieldset>
    )
}

export default Form
