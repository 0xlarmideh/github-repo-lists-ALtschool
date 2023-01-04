import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Repos from './pages/repos.jsx'
import Homepage from './pages/homepage.jsx'
import Error from './pages/error-404.jsx'
import SingleRepo from './pages/singlerepo.jsx'
import SharedNavbar from './components/shared-navbar.jsx'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from "/src/components/error-fallback.jsx";
import ErrorBound from './components/errorbound.jsx';
// import Repos from './components/repos.jsx'
// import './fonts/Kegilka.otf'
export default function App() {

  const errorHandler = (error, errorInfo) => {
    console.log(`Logging, ${error}, ${errorInfo}`)
  }

  return (
    <main>
      <ErrorBoundary FallbackComponent={ErrorFallback} onError={errorHandler}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SharedNavbar />} >
              <Route index element={<Homepage />} />
              <Route path="/errorboundary" element={<ErrorBound />} />
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
