import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <section className='grid-container'>
        <h1 className="Kegilka headline">404</h1>
      <div className='grid-item item1'>
        <div className="desc-joke">How you got here is still a mystery and we're as confused as you are. You made the wrong turn but luckily, you can still fix this.</div>
        <Link className="back-home" to='/'><i className="fa-solid fa-house"></i> Go Home</Link>
      </div>
    </section>
  )
}