import { Outlet } from 'react-router-dom';
import Navbar from "./navbar.jsx";

export default function SharedNavbar() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}