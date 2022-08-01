//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        
      </header>
    </div>

  );
}

function TailwindCSSButton(props) {
  return (
    <button className='bg-orange-500 
    text-white font-medium rounded-xl px-4 py-2 hover:bg-orange-600'>{props.children}Test button</button>
  )
}

export default App;
