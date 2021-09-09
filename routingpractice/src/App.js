
import './App.css';
import React from 'react';
import {useParams} from 'react-router-dom'
import {Switch, Route} from 'react-router-dom' 


function App() {

  const Home = (props) => {
    return <h1>Welcome!</h1>
  }

  const DisplayInput = (props) => {
    const {userInput} = useParams();

    return (
      <div>
        {(isNaN(userInput)) ? <h2>The word is {userInput}</h2> : <h2>The number is {userInput}</h2>}
      </div>
    )
  }

  const DisplayColors = (props) => {
    const {userInput, textColor, backGroundColor} = useParams();

    return(
      <div>
        {(isNaN(userInput)) ? <h2 style = {{color: `${textColor}`, background: `${backGroundColor}`}}>The word is {userInput}</h2> : <h2 style = {{color: `${textColor}`, background: `${backGroundColor}`}}>The number is {userInput}</h2>}
      </div>
      
    )
  }


  return (
    <div className="App">
      <Switch>

        <Route exact path ="/home">
          <Home />
        </Route>

        <Route exact path ="/displayInput/:userInput">
          <DisplayInput />
        </Route>

        <Route exact path ="/displayColors/:userInput/:textColor/:backGroundColor">
          <DisplayColors />
        </Route>

      </Switch>

    </div>
  );
}

export default App;
