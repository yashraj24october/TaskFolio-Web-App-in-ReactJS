import './Banner.css';
import bannerImg from '../../assets/BannerImg.png';
import { Fade } from 'react-reveal';
import { Zoom } from 'react-reveal';
import { Link } from 'react-router-dom';
import AddTaskFloatingBtn from '../AddTaskFloatingBtn/AddTaskFloatingBtn';
let Banner = () =>{
  return <section className="container d-flex align-items-center justify-content-around banner-wrapper">
<div>
<Fade left>
  <h2>Introducing Taskfolio</h2>
  <p className='slogan'>Your Ultimate Companion for Effortless Task Management and Reporting</p>
  </Fade>
  <Zoom>
    <Link to='/'><button className='get-started-btn'>Get started now!</button></Link>
  </Zoom>
</div>
<Zoom>
<img src={bannerImg}></img>
</Zoom>
<AddTaskFloatingBtn/>
  </section>
}

export default Banner;