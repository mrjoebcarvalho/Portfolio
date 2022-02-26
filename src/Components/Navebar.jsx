import React from 'react';
import {NavLink} from "react-router-dom";



function Navber() {
  return(
    <div className="NavBar">
      <div className="profile">
        <img src="" alt="/" />
      </div>
        <nav className="nav">
          <ul className="nav-items">
            <li className="nav-items">
              <NavLink to='/' exact activeClassName="active">Home</NavLink>
            </li>
            <li className="nav-items">
              <NavLink to='/about' exact activeClassName="active">About</NavLink>
            </li>
             <li className="nav-items">
              <NavLink to='/portfolios' exact activeClassName="active">Portfolios</NavLink>
            </li>
             <li className="nav-items">
              <NavLink to='/blogs' exact activeClassName="active">Blogs</NavLink>
            </li>
            <li className="nav-items">
              <NavLink to='/contact' exact activeClassName="active">Contacts</NavLink>
            </li>
          </ul>
          
        </nav>
        <footer>
          <p>
            @2022 Designed By Punith
          </p>>
        </footer>
    </div>
  )
  
}
export default Navbar;