import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <h1 className="larmideh">Larmideh</h1>
      <div>
        <NavLink className='nav-items' end to="/">Home</NavLink>
        <NavLink className='nav-items' to="/repos">Repos</NavLink>
        <NavLink className='nav-items nav-items3' to="*">Errors</NavLink>    
      </div>
      <h1 className="altschool">AltSchool</h1>
      
    </nav>
  )
}