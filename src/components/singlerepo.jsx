import { useEffect, useState } from "react"
import { Link, useParams} from 'react-router-dom'

const SingleRepo = () => {
 const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { repoId } = useParams();
    useEffect(() =>  {
    const url = `https://api.github.com/repos/0xlarmideh/${repoId}`;
      console.log(url)
      console.log(repoId)
    const fetchUsers = async () => {
    const res = await fetch(url)
    const data = await res.json();       
    setRepos(data)
    setIsLoading(false)
      console.log(data)
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <div>
        <h1 className="repo-title"> {repos.name} </h1>
      </div>
      <Link to="/">Back to repos</Link>
    </div>
  ) 
}

export default SingleRepo