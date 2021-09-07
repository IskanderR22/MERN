
import './App.css';
import Tabs from './components/Tabs';
import React, {useState} from 'react';




function App() {

  const [firstArray, setFirstArray] = useState([
    {
      name: "tab1",
      content: "Tab 1 content is showing here"
    },
    {
      name: "tab2",
      content: "Tab 2 content is showing here"
    },
    {
      name: "tab3",
      content: "Tab 3 content is showing here"
    }
  ])

  return (
    <div className="App">

      <Tabs firstArray={firstArray} />

    </div>
  );
}

export default App;
