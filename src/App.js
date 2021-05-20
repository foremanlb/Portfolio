import './App.css';
import Navbar from './components/Navbar/Navbar'
import { Route } from 'react-router-dom'
import Home from './screens/Home/Home'
import About from './screens/About/About'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
    </div>
  );
}

export default App;
