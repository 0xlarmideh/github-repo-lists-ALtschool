import { Link } from 'react-router-dom';

export default function Homepage () {
  return (
    <div className="homepage-container">
      <Link to='/repos' className="go-to-repo"><p className="see">See my Repos</p><i className="fa-solid fa-arrow-up-long"></i></Link>  
      <h1 className="Kegilka headline">a flashy ninja weaving codes</h1>
      <div className="flex">
        <div className="personal-details">
          <p>ABDULHAMEED BUSARI</p>
          <p>LARMIDEH@GMAIL.COM</p>
        </div>
        <div className="personal-details">
          <p>FRONTEND DEVELOPER</p>
          <p>NON-PRACTICING ARCHITECT</p>
          <p>ALTSCHOOL STUDENT (CLASS 22')</p> 
        </div>
      </div>
      
    </div>
  )
}