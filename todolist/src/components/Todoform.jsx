import React, {useState} from 'react'

const Todoform = (props) => {

const [newToDo, setNewToDo] = useState(""); // Setting state to create a new object 
const [toDoError, setToDoError] = useState(""); // Setting state for the error messages

const {addToDos} = props; // Deconstructing the addToDos function we passed from App.js 

    const validToDo = (event) => {  // Creating a function with validations and storing the new object
        if(event.length <= 2){
            setToDoError("Please fill in the form!");
        }
        else{
            setToDoError("");
            setNewToDo(event);
            
        }
    }

    const submitTodo = (event) => { // Creating a function when the form is submitted
        event.preventDefault(); 
        const newTodoObj = { // Creating the object and setting the target and done value 
            content: event.target[0].value, 
            done: false
        }
        setNewToDo(newTodoObj); // Using the setNewToDo from our state above
        event.target[0].value = "" // Set the original value to "" NINJA BONUS, clears the input field
        addToDos(newTodoObj); // Using the addToDos function from App.js 
    }

    return (
        <div>
            {JSON.stringify(newToDo)}
            <form onSubmit = {submitTodo}>
                <label>List: </label>
                <input type="text" onChange={(event) => validToDo(event.target.value)} />
                { toDoError ? <span style={{color: "red"}}>{toDoError}</span> : <span>&nbsp;</span> }
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default Todoform
