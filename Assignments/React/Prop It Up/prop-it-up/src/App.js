
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div>
      <fieldset>
        <legend>Person1</legend>
        <PersonCard firstName ={"Doe"} lastName ={"Jane"} age = {45} hairColor = {"Black"}/>
      </fieldset> 
      <fieldset> 
        <legend>Person2</legend>
        <PersonCard firstName ={"Smith"} lastName ={"Jon"} age = {88} hairColor = {"Brown"}/>
      </fieldset>  
      <fieldset> 
        <legend>Person3</legend>
        <PersonCard firstName ={"Fillmore"} lastName ={"Millard"} age = {50} hairColor = {"Brown"}/>
      </fieldset>  
      <fieldset> 
        <legend>Person4</legend>
        <PersonCard firstName ={"Smith"} lastName ={"Maria"} age = {62} hairColor = {"Brown"}/>
      </fieldset>  
    </div>
  );
}

export default App;
