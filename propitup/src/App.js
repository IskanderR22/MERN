
import './App.css';
import PersonCard from './Components/PersonCard'


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
        {peopleArray.map(person => {
          return <PersonCard header = {person.lastName +", " + person.firstName} firstName = {person.firstName} lastName = {person.lastName} age ={person.age} hairColor = {person.hairColor}/>
        })}
    </div>
  );
}

export default App;
