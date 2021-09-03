import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState([]);

  const clearAndRevertButtonFn = () => {
    console.log(people);
    if(people.length === 0){
    setPeople(data);
    }
    else{
        setPeople([]);
    } 
  }
  return (<main> 
    <section className="container">
      <h3>{people.length} birthdays today!</h3>
      <List people = {people}/>
      <button onClick={clearAndRevertButtonFn} > {people.length === 0 ? "Populate" : "Clear All!"}</button>
    </section>
  </main> );
}
export default App;
