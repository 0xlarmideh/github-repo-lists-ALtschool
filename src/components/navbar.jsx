import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <NavLink className='nav-items' end to="/">Repos</NavLink>
      <NavLink className='nav-items' to="*">Errors</NavLink>    
    </nav>
  )
}