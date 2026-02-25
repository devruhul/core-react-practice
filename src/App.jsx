
import './App.css'
import Baller from './Baller'
import Counter from './Counter'

function App() {
  function handleClick1() {
    alert('button 1 clicked')
  }
const handleClick3 = () => {
  alert('button 3 clicked')
}

const handleClick5 = (num) => {
  alert(`button ${num} clicked`)
}

  return (
    <>
      <h1>Welcome to React</h1>
      <Baller />
      <Counter />
      {/* event handler */}
      <button onClick={handleClick1}>click me 1 </button>
      <button onClick={function handleCLick2(){
        alert('button 2 clicked')
      }}>click me 2</button>
      <button onClick={handleClick3}>click me 3 </button>
      <button onClick={() => alert('button 4 clicked')}>click me 4 </button>
      <button onClick={() => handleClick5(10)}>click me 5 </button>
    </>
  )
}

export default App
