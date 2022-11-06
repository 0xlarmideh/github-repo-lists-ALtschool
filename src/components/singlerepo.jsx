import { useEffect, useState } from "react"
import { Link, useParams} from 'react-router-dom'
import { Helmet } from 'react-helmet-async';

const SingleRepo = () => {
 const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { repoId } = useParams();
    const githubUrl = `https://github.com/0xlarmideh/${repoId}`;
    useEffect(() =>  {
    const url = `https://api.github.com/repos/0xlarmideh/${repoId}`;
    const fetchUsers = async () => {
    const res = await fetch(url)
    const data = await res.json();       
    setRepos(data)
    setIsLoading(false)
    };
    fetchUsers();
  }, []);

  let dateObj = new Date(repos.created_at);
  let myDate = (dateObj.getUTCFullYear()) + "/" + (dateObj.getMonth() + 1)+ "/" + (dateObj.getUTCDate());
  return (
    <>
      <Helmet>
        <title>Single Repository Page</title>
        <meta 
          name="description"
          content="This page displays single repository details from 0xlarmideh's Github"
          />
        <link 
          rel="canonical"
          href="/repos/:repoId"
          />
      </Helmet>
    <section className='grid-container'>
        <h1 className="Kegilka headline">404</h1>
      <div className='grid-item item1'>
        <div className="desc-joke">How you got here is still a mystery and we're as confused as you are. You made the wrong turn but luckily, you can still fix this.</div>
        <Link className="back-home" to='/'><i className="fa-solid fa-house"></i> Go Home</Link>
      </div>
    </section>
    <div>
        <div className="repo-top">
        <p className="singrepo-language">{repos.language} </p>
        <h1 className="singrepo-title"> {repos.name} </h1>
        <p className="singrepo-date">{myDate}</p>
      </div>
      <div className="desc-container">
        <div className="repo-desc-head">Descriptions</div>
        <div className="repo-description">{repos.description === null ? <div>No descriptions available</div> : repos.description} </div>
        <div className="singrepo-links">
          <a className="back-home" href={githubUrl}>Check on Github</a>
        <Link className="back-home" to="/repos">Back to repos</Link>
        </div> 
      </div>
    </div>
    </> 
  ) 
}

export default SingleRepo