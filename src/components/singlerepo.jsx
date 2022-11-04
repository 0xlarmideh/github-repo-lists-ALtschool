import { useEffect, useState } from "react"
import { Link, useParams} from 'react-router-dom'

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

  // const date = repos.created_at.slice(0,10)
  // console.log(repos.created_at.slice(0,10))
  let dateObj = new Date(repos.created_at);

let myDate = (dateObj.getUTCFullYear()) + "/" + (dateObj.getMonth() + 1)+ "/" + (dateObj.getUTCDate());
  return isLoading ? (<img src="/src/loading.gif"></img>) : (
    <div>
      <div>
        <p className="repo-language">{repos.language} </p>
        <h1 className="Kegilka headline repos-title"> {repos.name} </h1>
        <p className="repo-date">{myDate}</p>
      </div>
      <div className="repo-description">{repos.description}</div>
      <a className="check-github" href={githubUrl}>Check on Github</a>
      <Link to="/repos">Back to repos</Link>
    </div>
  ) 
}

export default SingleRepo