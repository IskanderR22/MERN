
import './App.css';
import PersonCard from './components/PersonCard'


// Creating an array of people objects 
var peopleArray = [
  {"firstName": "Jane", "lastName": "Doe", "age": 45, "hairColor": "Black"},
  {"firstName": "John", "lastName": "Smith", "age": 88, "hairColor": "Brown"},
  {"firstName": "Millard", "lastName": "Fillmore", "age": 50, "hairColor": "Brown"},
  {"firstName": "Maria", "lastName": "Smith", "age":62, "hairColor": "Brown"},
]

function App() {
  // Using map() to display the people objects using the key value pairs 
  return (
    <div className="App"> 
        {peopleArray.map(person => { // {...person} spreads all the info from the peopleArray, firstName, lastName, age, hairColor
          return <PersonCard  {...person} header = {person.lastName + ", " + person.firstName} />
        })}
    </div>
  );
}

export default App;
