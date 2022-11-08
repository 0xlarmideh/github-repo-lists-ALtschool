import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className="larmideh">Larmideh</div>
      <div>
        <NavLink className='nav-items' end to="/">Home</NavLink>
        <NavLink className='nav-items' to="/repos">Repos</NavLink>
        <NavLink className='nav-items nav-items3' to="/errorboundary">Error</NavLink>     
      </div>
    </nav>
  )
}