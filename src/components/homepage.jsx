import { Helmet } from 'react-helmet-async';

export default function Homepage () {
  return (
    <>
      <Helmet>
        <title>Homepage</title>
        <meta 
          name="description"
          content="This is the homepage for AltSchool second semester exam, Question 1 developed by Abdulhameed Busari"
          />
        <link 
          rel="canonical"
          href="/"
          />
      </Helmet>
      <div className="homepage-container">
        <h1 className="Kegilka headline">a flashy ninja weaving codes</h1>
        <div className="flex">
          <div className="personal-details">
            <p>ABDULHAMEED BUSARI</p>
            <p>LARMIDEH@GMAIL.COM</p>
          </div>
          <div className="personal-details personal-details2">
            <p>FRONTEND DEVELOPER</p>
            <p>NON-PRACTICING ARCHITECT</p>
            <p>ALTSCHOOL STUDENT (CLASS 22')</p> 
          </div>
        </div>
      
    </div>
    </>
  )
}