import {useState} from 'react';
import {useErrorHandler} from 'react-error-boundary'
import { Helmet } from 'react-helmet-async';

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
      setCount((prev) => prev+1)
    }
  } 
    catch (e) {
      handleError(e)
    }
  }
    
  return (
    <>
      <Helmet>
        <title>ErrorBoundary Test Page</title>
        <meta
          name="description"
          content="This page is specifically for testing error boundary"
        />
        <link rel="canonical" href="/errorboundary" />
      </Helmet>
      <div classname="error-bound">
      <h1 className="Kegilka error-head">{count} </h1>
      <button className="back-home error-link" onClick={handleClick} >Counter</button>
    </div>
    </>
    
    )
}

export default ErrorBound

