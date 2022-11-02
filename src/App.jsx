import './App.css'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Repos from './components/repos.jsx'
import Error from './components/error.jsx'
import SingleRepo from './components/singlerepo.jsx'
import SharedNavbar from './components/shared-navbar.jsx'
// import Repos from './components/repos.jsx'
import './Kegilka.otf'
export default function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedNavbar/>} >
            <Route index element={<Repos />} />
            <Route path=":repoId" element={<SingleRepo />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  )
}
