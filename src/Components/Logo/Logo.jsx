import { Link } from 'react-router-dom';
import logo from '../../assets/taskfolio-logo.png';
import './Logo.css';


let Logo = () =>{
return <Link to='/'><img src={logo} className='logo-img'/></Link>;
}

export default Logo;