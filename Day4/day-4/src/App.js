import logo from './logo.svg';
import './App.css';
import Square from './Square';

function App() {
  const arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]


const Grid = () =>{
  return arr.map(num => (<Square number = {num}/>))
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>30 Days of React</h1>
        <h4>Number Generator</h4>
      
      <div className='grid'>
      <Grid/>
      </div>
      </header>
    </div>
  );
}

export default App;
