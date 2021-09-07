import React, {useState} from 'react'

const Todoform = (props) => {

const [newToDo, setNewToDo] = useState("");
const [toDoError, setToDoError] = useState("");

const {addToDos} = props;

    const validToDo = (event) => { 
        if(event.length <= 2){
            setToDoError("Please fill in the form!");
        }
        else{
            setToDoError("");
            setNewToDo(event);
            
        }
    }

    const submitTodo = (event) => {
        event.preventDefault(); 
        const newTodoObj = {
            content: event.target[0].value, 
            done: false
        }
        setNewToDo(newTodoObj);
        addToDos(newTodoObj);
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
