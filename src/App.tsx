import './App.css';
import { Greet } from './Greet'
import { Person } from './Person'
import { PersonList } from './PersonList'

function App() {
  const personName = {
    fName: 'John',
    lName: ' Smith'
  }
  const nameList = [
    {
      fName: 'John',
      lName: ' Smith'
    },
    {
      fName: 'John',
      lName: ' Smith'
    },
    {
      fName: 'John',
      lName: ' Smith'
    }
  ]
  return (
    <div className="App">
      <Greet name="Ajay" messageCount={20} isLoggedIn={true}></Greet>
      <Person name={personName}></Person>
      <PersonList name={nameList} />

    </div>
  )
    

}

export default App;
