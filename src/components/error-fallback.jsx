import { Link } from 'react-router-dom';

export const ErrorFallback = () => {
  return <div role="alert">
    <h1 className="Kegilka">Something went wrong!!! Why not go back home</h1>
    <div>Why not go back home</div>
    <a className="back-home" href="/" >Go Back home</a>
  </div>
}
