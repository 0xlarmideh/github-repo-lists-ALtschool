import { useEffect, useState } from "react"
import { Link, useParams} from 'react-router-dom'

const SingleRepo = () => {
 const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { repoId } = useParams();
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

  return isLoading ? (<img src="/src/loading.gif"></img>) : (
    <div>
      <div>
        <h1 className="Kegilka headline repos-title"> {repos.name} </h1>
        <p>{new Date(repos.created_at).toUTCString()} </p>
      </div>
      <Link to="/repos">Back to repos</Link>
    </div>
  ) 
}

export default SingleRepo