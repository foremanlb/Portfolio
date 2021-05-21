import './App.css';
import Navbar from './components/Navbar/Navbar'
import { Route } from 'react-router-dom'
import Home from './screens/Home/Home'
import About from './screens/About/About'
import Work from './screens/Work/Work'
import Contact from './screens/Contact/Contact'

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
      <Route path='/work'>
        <Work />
      </Route>
      <Route path='/contact'>
        <Contact />
      </Route>
    </div>
  );
}

export default App;
