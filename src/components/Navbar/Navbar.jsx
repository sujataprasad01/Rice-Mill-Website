import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import logo from './../../assets/logo/noun-rice-94344 (1).png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
function Navbar() {

  const [sidenav, setSidenav]=useState(false);

  const sidenavShow=()=>{
    setSidenav(!sidenav);
  }

  useEffect(()=>{
    const handleScroll=()=>{
      setSticky(window.scrollY>20)
    }

    window.addEventListener('scroll', handleScroll);
    return()=>window.removeEventListener('scroll', handleScroll);
  })
  // menu icon
  const menuIcon = <FontAwesomeIcon icon={faBars} />

  const [sticky, setSticky]=useState(false);
  return (
    <>
    <header id='site_header' className={`${sticky? "sticky":""}`}>
      <div className='container'>
        <nav className='navbar' id='Navbar'>
          <div className='navbar_brand'>
            <Link to='/' spy={true} smooth={true}>
              <img className='logo' src={logo} alt='Logo'></img>
            </Link>
          </div>
          <div className='navbar_toggler' onClick={sidenavShow}>
            {menuIcon}
          </div>
          <div className={`menu_items ${sidenav===true? 'active':''}`}>
            <ul>
              <li>
            <Link activeClass='active' to='/'>
              <h4>Home</h4>
                  </Link>
              </li>
              <li>
            <Link to='/about'>
              <h4>About Us</h4>
                  </Link>
              </li>
             
              <li>
            <Link to='/export'>
              <h4>Export</h4>
                  </Link>
              </li>
              <li>
              <Link to='/manufacture'>
              <h4>Manufacture</h4>
                  </Link>
              </li>
              <li>
            <Link to='/contact'>
              <h4>Contact</h4>
                  </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>

    {/* <div style={{height:"1000px"}}>
    </div> */}
</>
  )
}

export default Navbar
