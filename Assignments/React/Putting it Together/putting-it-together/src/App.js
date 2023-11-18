
import './App.css';
import Person from './components/person';  // import Person component 

const DataPerson = [
{firstName : "Doe", lastName :"Jane", age : 45, hairColor : "black"}, 
{firstName : "Smith", lastName :"Jon", age : 45, hairColor : "Brown"}, 
{firstName : "Fillmore", lastName :"Millard", age : 50, hairColor : "Brown"}, 


]

function App() {
  return (
    <fieldset >
      <legend>App.jsx</legend>
      <Person firstName = {DataPerson[0].firstName}   lastName = {DataPerson[0].lastName}  age = {DataPerson[0].age} hairColor = {DataPerson[0].hairColor}/>
      <Person firstName = {DataPerson[1].firstName}   lastName = {DataPerson[1].lastName}  age = {DataPerson[1].age} hairColor = {DataPerson[1].hairColor}/>
      <Person firstName = {DataPerson[2].firstName}   lastName = {DataPerson[2].lastName}  age = {DataPerson[2].age} hairColor = {DataPerson[2].hairColor}/>
    </fieldset>
    );
}

export default App;
