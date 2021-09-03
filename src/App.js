import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  return (<main> 
    <section class="container">
      <h3>0 birthdays today!</h3>
      <List />
      <button onClick={() => {console.log("you clicked me!")}} > Click Me!</button>
    </section>
  </main> );
}
export default App;
