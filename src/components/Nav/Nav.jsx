import { useState } from 'react'
import { useLocation, useNavigate} from 'react-router-dom'
import style from './index.module.css'

const Nav = () =>{
const [open, setOpen] = useState(false)

const navigate = useNavigate();
const location = useLocation();

const goTo = (e)=>{
  console.log(e.target.id);
  navigate(`/${e.target.id}`)
}

  return (
      <div className={open ? style.asideOpen : style.aside}>
        <div className={style.logo}>
          <span>&lt;/&gt;</span>
        </div>
        <div className={open ? style.navTogglerOpen :style.navToggler} onClick={()=>{
          setOpen(!open)
        }}>
          <span></span>
        </div>
        <ul className={style.nav}>
          <li>
            <p  id='home' onClick={goTo} style = {location.pathname === '/home'?(
              {
                color:'rgb(137, 133, 218)',
                background:'rgb(39,39,39)'

              }
            ):null }><i class="fa fa-home" ></i> HOME</p>
          </li>
          <li>
            <p id='about' onClick={goTo} style = {location.pathname === '/about'?(
              {
                color:'rgb(137, 133, 218)',
                background:'rgb(39,39,39)'

              }
            ):null } ><i class="fa fa-user"></i> ABOUT</p>
          </li>
          <li>
            <p  id='skills' onClick={goTo} style = {location.pathname === '/skills'?(
              {
                color:'rgb(137, 133, 218)',
                background:'rgb(39,39,39)'

              }
            ):null } ><i class="fa fa-list"></i> SKILLS</p>
          </li>
          <li>
            <p  id='portafolio' onClick={goTo} style = {location.pathname === '/portafolio'?(
              {
                color:'rgb(137, 133, 218)',
                background:'rgb(39,39,39)'

              }
            ):null } ><i class="fa fa-briefcase"></i> PORTFOLIO</p>
          </li>
          <li>
            <p id='contact' onClick={goTo} style = {location.pathname === '/contact'?(
              {
                color:'rgb(137, 133, 218)',
                background:'rgb(39,39,39)'

              }
            ):null } ><i class="fa fa-comments"></i> CONTACT</p>
          </li>
        </ul>
      </div>
  )
}

export default Nav;