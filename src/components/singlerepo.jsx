import { useEffect, useState } from "react"
import { Link, useParams} from 'react-router-dom'

const SingleRepo = () => {
 const [repos, setRepos] = useState([]);
  const { repoId } = useParams();
    useEffect(() =>  {
    const url = "https://api.github.com/users/0xlarmideh/repos";
    const fetchUsers = async () => {
    const res = await fetch(url)
    const data = await res.json();       
    setRepos(data)
    // setIsLoading(false)
      // console.log(data)
    };
    fetchUsers();
  }, []);
  
  const singRepo = repos.find((repo) => repo.id === repoId);
  const {title} = singRepo
  return (
    <div>
      <div>
        <h1 className="repo-title">{title}</h1>
      </div>
      <Link to="/">Back to repos</Link>
    </div>
  )
}

export default SingleRepo