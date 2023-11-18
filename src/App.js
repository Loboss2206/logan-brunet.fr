import './tailwind.css';
import './App.css';
import Main from './components/Main';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <p className='text-green-500'>PORTFOLIO</p>
      <Main />
      <Projects />
    </div>
  );
}

export default App;