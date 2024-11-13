import { Outlet, Link } from "react-router-dom";
import "./Layout.css";


const Layout = () => {
  return (
    <>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/tours">Tours</Link>
          </li>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
        </ul>
      </nav>
      
      <main className="page-content">
        <Outlet />
      </main>
    </>
  )
};

export default Layout;
