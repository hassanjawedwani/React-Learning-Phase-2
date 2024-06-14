import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import store from './redux/store';
import Count from './components/Count';
function App() {
  return (
    <div className="App">
      <Count />
      <Home />
    </div>
  );
}

export default App;
