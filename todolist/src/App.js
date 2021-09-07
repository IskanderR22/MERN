
import './App.css';
import React, {useState} from 'react';
import Todoform from './components/Todoform';
import DisplayToDos from './components/DisplayToDos';

function App() {

  const [allTodos, setallTodos] = useState([]); 

  const addToDos = (newToDoObj) => {
    // Copying all the objects in the array 
    const todoList = [...allTodos];
    // Pushing the new to do object in our new List
    todoList.push(newToDoObj);
    // Set all of the to do objects
    setallTodos(todoList);
  }

  const setDone = (todoObj, idx) =>{
    let allTodosCopy = [...allTodos];
      console.log("here idx = ", idx);
      
      allTodosCopy[idx].done = !allTodosCopy[idx].done;
      
      setallTodos(allTodosCopy);
  }

  const deleteToDo = (todoObj, idx) => {
    let allTodosCopy = [...allTodos];
    allTodosCopy.splice(idx, 1);

    setallTodos(allTodosCopy);
  }
  
  return (
    <div className="App">
      <Todoform addToDos ={addToDos} />
      {JSON.stringify(allTodos)}
      <DisplayToDos allTodos = {allTodos} setDone ={setDone} deleteToDo ={deleteToDo}/>
    </div>
  );
}

export default App;
