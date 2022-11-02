import { useEffect, useState } from "react"
import { Link, useParams} from 'react-router-dom'

const SingleRepo = () => {
 const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { repoId } = useParams();
    useEffect(() =>  {
    const url = "https://api.github.com/users/0xlarmideh/repos";
    const fetchUsers = async () => {
    const res = await fetch(url)
    const data = await res.json();       
    setRepos(data)
    setIsLoading(false)
      // console.log(data)
    };
    fetchUsers();
  }, []);
  const reprep = repos;
  console.log(reprep)
  const singRepo = reprep.find((repo) => repo.id === repoId);
  // console.log(singRepo)
  return repos && (
    <div>
      <div>
        <h1 className="repo-title">Oya ooo</h1>
        <h1 className="repo-title">{repoId}</h1>
      </div>
      <Link to="/">Back to repos</Link>
    </div>
  ) 
}

export default SingleRepo