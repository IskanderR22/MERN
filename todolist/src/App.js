
import './App.css';
import React, {useState} from 'react';
import Todoform from './components/Todoform';
import DisplayToDos from './components/DisplayToDos';

function App() {

  const [allTodos, setallTodos] = useState([]); // Setting the state to an empty array 

  // CREATE FUNCTION 
  const addToDos = (newToDoObj) => {
    // Copying all the objects in the array 
    const todoList = [...allTodos];
    // Pushing the new to do object in our new List
    todoList.push(newToDoObj);
    // Set all of the to do objects
    setallTodos(todoList);
  }

  // UPDATE FUNCTION
  const setDone = (todoObj, idx) =>{
    let allTodosCopy = [...allTodos]; // Copying all the objects in the array
      console.log("here idx = ", idx);
      
      allTodosCopy[idx].done = !allTodosCopy[idx].done; // Setting the done attribute to the OPPOSITE of what it currently is
      
      setallTodos(allTodosCopy); // Set the new updated array
  }

  // DELETE FUNCTION 
  const deleteToDo = (todoObj, idx) => { // Creating a function and setting two parameters it will receive 
    let allTodosCopy = [...allTodos]; // Copying all the objects in the current array
    allTodosCopy.splice(idx, 1); // Going to the idx and removing 1 component at idx 
    setallTodos(allTodosCopy); // Set the new updated array 
  }

  // Another way to delete by index 
  // const deleteToDo = (deleteIndex) => {
  //   const allTodosCopy = allTodos.filter( toDo, index) => {
  //     if (deleteIndex !== index){
  //       return true;
  //     }
  //     else{
  //       return false;
  //     }
  //   }
  // }
  
  // Line 52, Passing the allToDos function to create a new object
  // Line 53, Checking the live updates of the array when we add an object
  // Line 54, Passing in the array, Passing in the setDone function to update, Passing in deleteToDo function to delete from the array  
  return (
    <div className="App">
      <Todoform addToDos ={addToDos} /> 
      {JSON.stringify(allTodos)}
      <DisplayToDos allTodos = {allTodos} setDone ={setDone} deleteToDo ={deleteToDo}/>
    </div>
  );
}

export default App;
