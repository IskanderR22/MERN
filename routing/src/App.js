
import './App.css';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import Home from './components/Home'
import About from './components/About';
import Result from './components/Result';
import Form from './components/Form';

function App() {




  // Make sure the most to put the more complex route at the top of the list
  // exact states if the words in the route matches exactly then go to it 
  return (
    <div className="App">
            <h1>Routing Example</h1>
      <p>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>   
        <Link to ="/form"> Form </Link>
      </p>
      <Switch>
        
        <Redirect from="/" to ="/form"/>

        <Route path="/result/:variableName1/:variableName2">
          <Result/>
        </Route>

        <Route  exact path="/about">
          <About />
        </Route>

        <Route exact path ="/form">
          <Form />
        </Route>

        <Route  exact path="/">
          <Home/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
