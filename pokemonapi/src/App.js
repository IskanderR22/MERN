
import './App.css';
import React, {useState} from 'react';
import axios from 'axios';

function App() {


  const [pokemons, setPokemons] = useState([]); // Setting state to an empty Array to hold all the pokemon 


  // Vanilla fetch method 
  const fetchPokemons = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807")
    .then(response => response.json())
    .then(jsonResponse => {
      console.log(jsonResponse.results) // Remember to check where the array of object is via console log
      setPokemons(jsonResponse.results)
    })
    .catch(err => {
      console.log(err);
    })
  } 

  // AXIOS fetch method 
  const axiosPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807")
    .then(response => {
      console.log(response.data.results) // Remember Axios wraps information in .data so we need to access it
      setPokemons(response.data.results)
    })
    .catch(err => console.log(err))
  }


  return (
    <div className="App"> 
      <button onClick={fetchPokemons}>Display Pokemons</button> 
      <button onClick={axiosPokemon}>Display Pokemons the axios way</button>
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th>Pokemon Name</th>
          </tr>
        </thead>
        <tbody>
        {
          pokemons.map( (pokemon, index) => { // Using the .map to itterate throught the array
            return( // When we ipen {} we must return the infomation we are accessing and displaying 
              <tr key={index}>
                <td>{pokemon.name}</td>
              </tr>
            )
          })
        }
        </tbody>
      </table> 
    </div>
  );
}

export default App;
