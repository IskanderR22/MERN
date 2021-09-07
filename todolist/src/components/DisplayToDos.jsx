import React, {useState} from 'react'

const DisplayToDos = (props) => {

    const {allTodos} = props;
    const {setDone} = props;
    const {deleteToDo} = props;
    

    const changeDone= (event, todo, index) => {
        console.log("Hello?");
        setDone(todo, index);
    }

    const deleteIt = ( event, todo, index) => {
        deleteToDo(todo, index)
    }

    return (
        <fieldset>
            <legend>list:</legend>
            <div className="d-flex justify-content-around flex-wrap" style = {{gap: 5}}>
                {
                    allTodos.map( (toDo, index) => {
                        return (
                            <div key = {index}>
                                { toDo.done ? <span style={{textDecoration: "line-through"}}>{toDo.content}</span> : <span style={{textDecoration: "none"}}>{toDo.content}</span> }
                            <input type="checkbox" onChange =  {(event) => changeDone(!event, toDo, index)} />
                            <button onClick={(event) => deleteIt(event.target.value,toDo,index)}>Delete</button>
                            </div>
                        )
                    })
                }
            </div>
        </fieldset>
    )
}

export default DisplayToDos
