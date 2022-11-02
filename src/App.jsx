import './App.css'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Repos from './components/repos.jsx'
import Homepage from './components/homepage.jsx'
import Error from './components/error.jsx'
import SingleRepo from './components/singlerepo.jsx'
import SharedNavbar from './components/shared-navbar.jsx'
import {ErrorBoundary} from 'react-error-boundary'
import {ErrorFallback} from "/src/components/error-fallback.jsx";
// import Repos from './components/repos.jsx'
import './Kegilka.otf'
export default function App() {
  
  const errorHandler = (error,errorInfo) => {
    console.log(`Logging, ${error}, ${errorInfo}`)
  }
  
  return (
    <main>
      <ErrorBoundary FallbackComponent={ErrorFallback} onError={errorHandler}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SharedNavbar/>} >
              <Route index element={<Homepage />} />
              <Route path="/repos" element={<Repos />} />
              <Route path="/repos/:repoId" element={<SingleRepo />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </main>
  )
}
