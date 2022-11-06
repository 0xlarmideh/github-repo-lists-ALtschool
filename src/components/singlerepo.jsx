import { useEffect, useState } from "react"
import { Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async';

const SingleRepo = () => {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { repoId } = useParams();
  const githubUrl = `https://github.com/0xlarmideh/${repoId}`;
  useEffect(() => {
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
  let myDate = (dateObj.getUTCFullYear()) + "/" + (dateObj.getMonth() + 1) + "/" + (dateObj.getUTCDate());

  return isLoading ? (<img className="loading-gif" src="/loading.gif"></img>) : (
    <div>
      <Helmet>
        <title>Single Repository Page</title>
        <meta
          name="description"
          content="This page displays single repository details from 0xlarmideh's Github"
        />
      </Helmet>

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
            <a className="back-home" href={githubUrl} target="_blank" rel="noopener noreferrer"  >Check on Github</a>
            <Link className="back-home" to="/repos">Back to repos</Link>
          </div>
        </div>
      </div>
    </div>)
}

export default SingleRepo