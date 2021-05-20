import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div id='navbar'>
      <div id='title'>
        <Link to='/'>Can Do Coding</Link>
      </div>
      <div id='nav'>
        <Link to='/about' className='nav-link'>About</Link>
        <Link to='/work' className='nav-link'>Work</Link>
        <Link to='/contact' className='nav-link'>Contact</Link>
      </div>
    </div>
  )
}
