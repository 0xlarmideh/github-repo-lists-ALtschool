import { useEffect, useState } from "react"
import RepoDetails from './repo-details.jsx'
import { Helmet } from 'react-helmet-async';

export default function Repos() {
  const [repos, setRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(4);
  const [isLoading, setIsLoading] = useState(true);
  
  // Call Github API
  useEffect(() =>  {
    const url = "https://api.github.com/users/0xlarmideh/repos";
    const fetchUsers = async () => {
    const res = await fetch(url);
    const data = await res.json();      
    setRepos(data);
    setIsLoading(false);
    };
    fetchUsers();
  }, []);

  // Pagination
  // Get Current Repos
  const length = repos.length
  const indexOfLastRepo = currentPage * perPage;
  const indexOfFirstRepo = indexOfLastRepo - perPage;
  const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo)

   // Mapping Repo details
  const reposMapped = currentRepos.map(((item, index) => <RepoDetails key={item.id} title={item.name} index={index} owner={item.owner.login} id={item.name} 
  />))
  
  // Create page array
  const pageNumbersArr = [];
  let reposLength = Math.ceil(length/perPage)
  for(let i=1; i<=reposLength; i++) {
    pageNumbersArr.push(i)
  }
    
  // Map over Page Array and Change page
  const pageNumbers = pageNumbersArr.map(number => {
     return <button key={number} onClick={(e) => setCurrentPage(number)} className="page-link">{number}</button>
  })
  
  return (
    <>
        <Helmet>
          <title>0xlarmideh's Repositories</title>
          <meta 
            name="description"
            content="This page displays all repositories details from 0xlarmideh's Github"
            rel="/repos"
            />
          <link rel="canonical" href="/repos" />
        </Helmet>
      
     { isLoading ? (<div className="loading-gif"><img src="/loading.gif"></img></div>) : (
    <div className="repos-container">
      <h1 className="Kegilka headline repo-headline">{'<' + 'flashy' + '>'} repos by larmideh </h1>
      <div className="repo-details">{reposMapped} </div>
      <div className="current-page">Page <span className="strong">{currentPage} </span> of {reposLength} </div><br></br>
        <section className="pagination-container">
          <button className="page-link" disabled={currentPage <= 1} aria-disabled={currentPage <= 1} onClick={() => setCurrentPage(prev => prev-1)}>Prev</button>
          <div className="pagination">{pageNumbers}</div>
          <button className="page-link" disabled={currentPage >= reposLength} aria-disabled={currentPage >= 1} onClick={() => setCurrentPage(prev => prev+1)}>Next</button>
        </section>
    </div>
  )}
    </> 
  )
}

  // export default Repos