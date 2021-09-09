
import './App.css';
import DisplayPerson from './components/DisplayPerson';
import DisplayPlanet from './components/DisplayPlanet';
import Form from './components/Form';
import {Switch, Route} from 'react-router-dom'



function App() {

// Creating routes to display different components 
// exact is saying, only go to this route if it is entered exactly
// "/planet/:id" is passing in a variable from the route, either a number or a string 
  return (
    <Switch>
      <Route exact path ="/form">
        <Form />
      </Route>

      <Route exact path ="/planet/:id">
        <Form />
        <DisplayPlanet />
      </Route>

      <Route exact path ="/people/:id">
        <Form />
        <DisplayPerson />
      </Route>
    </Switch>
  );
}

export default App;
