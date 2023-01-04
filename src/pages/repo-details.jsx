import { Link } from 'react-router-dom';

export default function RepoDetails (props) {
  return (
    <div className="repo-container">
      <div>
        <div className="repo-title">{props.title}</div>
        <div className="owner">{props.owner}</div>
      </div>
      <div className="index">0{props.index+1}</div>
      <Link to={`/repos/${props.id}`} className="links">more info</Link>  
    </div>
  )
}

