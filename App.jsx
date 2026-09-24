  import React, { useState } from 'react'

const App = () => {
    const[count,setcount]=useState(0);
    function handleclick(){
        setcount(count+1)
    }
  return (
    

  
    <div id="dhirajjadhav">
   count: {count}
   <br></br>
        <button  id="dhiraj"onClick={handleclick}>increment</button>
    </div>
  )
}

export default App
