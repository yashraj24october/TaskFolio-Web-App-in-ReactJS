import './Header.css';
import {NavLink} from 'react-router-dom';
import { Fade } from 'react-reveal';
import Logo from '../Logo/Logo';
let Header = ()=>{
  return <header>
  <div className="container d-flex align-items-center justify-content-between">
<Logo/>
<div className="primary-menu d-flex align-items-center">
  <ul className="d-flex align-items-center gap-2">
  <Fade bottom>
    <NavLink to="/"><li>Home</li></NavLink>
    </Fade>
    <Fade left>
    <li>Services</li>
    </Fade>
    <Fade bottom>
    <li>Dashboard</li>
    </Fade>
    <Fade left>
    <li>Generate Report</li>
    </Fade>
    <Fade right>
    <li>Create Documentation</li>
    </Fade>
  </ul>
</div>
<div className="account-menu d-flex">
  <NavLink to='/login'><button className="account-menu-link log-in">LOG IN</button></NavLink>
  <NavLink to='/register'><button className="account-menu-link sign-up">Sign Up - its free</button></NavLink>
  <NavLink to='/logout'><button className="account-menu-link log-out">Log out</button></NavLink>
  </div>
  </div>

  </header>

}

export default Header;