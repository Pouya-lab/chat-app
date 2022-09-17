import React, { useState } from 'react';
import './style.css';

function App() {
   const [count , setCount] = useState(0);
  return (
    <section >

      <section className="counter-body">
        <section>
        <h1>Counter App</h1>
        <h2>{count}</h2>
        <section className="buttons">
          <button className="increase" onClick={()=> setCount(count+1) }>Increase</button>
          <button className="decrease" onClick={()=> setCount(count-1) } disabled={count===0}>Decrease</button>
          <button className="reset" onClick={()=> setCount(0) } disabled={count===0}>Reset</button>
  
          </section>    
        </section>
        </section>

    </section>
    
  )
}

export default App