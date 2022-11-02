import { Link } from 'react-router-dom';

export default function RepoDetails (props) {
  return (
    <div className="repo-container">
      <div>
        <h1 className="repo-title">{props.title}</h1>
        <div className="owner">{props.owner}</div>
      </div>
      <div className="index">0{props.index+1}</div>
      <Link to={`/repos/${props.id}`} className="links">more info</Link>  
    </div>
  )
}

