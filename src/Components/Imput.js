import React from 'react'

const Imput = () => {
  const handleClick = (event, name) => {
    event.preventDefault();
    console.log("Hello " + name)
  }

  const handleInput = (e) => {
    const vocales = ["a", "e", "i", "o", "u"]
    if (vocales.includes(e.key)) e.preventDefault()
  }
  const handlePropagation = (e) => {
        e.preventDefault();
        alert("Propagation");
  }

  return (
    <form>
      <input type="text" onKeyDown={handleInput}></input>
      <button onClick={(event) => handleClick (event, "Arg")}>Click me</button>
      <button onClick={handlePropagation}>Propagation</button>
    </form>
  )
}

export default Imput;
