
import './App.css';
import React, {useState} from 'react';
import Display from './components/Display';
import Form from './components/Form';

function App() {

  const [allBoxes, setAllBoxes] = useState([])

  const addNewBox = (newBoxObj) => {
    const newBoxArray = [...allBoxes];
    newBoxArray.push(newBoxObj);
    setAllBoxes(newBoxArray);
  }

  return (
    <div className="App">
      <Form addNewBox={addNewBox} />
      <Display allBoxes={allBoxes}/>
    </div>
  );
}


export default App;
