import {useState} from 'react';
import {useErrorHandler} from 'react-error-boundary'

const maxCount = 2;

const ErrorBound = () => {

  const [count, setCount] = useState(0)
  const handleError = useErrorHandler()
  const handleClick = () => {
   try  {
     if (count === maxCount) {
      throw new Error('Count limit Exceeded')
    } 
    else {
      setCount((c) => c+1)
    }
  } catch (e) {
    handleError(e)
  }
  }

    
  return (
    <div classname="error-bound">
      <div className="Kegilka error-head">{count} </div>
      <button className="back-home error-link" onClick={handleClick} >Counter</button>
    </div>
    )
}

export default ErrorBound

