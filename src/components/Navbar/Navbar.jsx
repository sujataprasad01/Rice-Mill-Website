import React, {useState, useEffect, useRef} from 'react';
// import { handleSubmit } from 'react';
import { Link } from 'react-router-dom'
import logo from './../../assets/logo/noun-rice-94344 (1).png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
function Navbar() {

  // const [sidenav, setSidenav]=useState(false);

  // const sidenavShow=()=>{
  //   setSidenav(!sidenav);
  // }

  // useEffect(()=>{
  //   const handleScroll=()=>{
  //     setSticky(window.scrollY>20)
  //   }

  //   window.addEventListener('scroll', handleScroll);
  //   return()=>window.removeEventListener('scroll', handleScroll);
  // })
  // menu icon
  const menuIcon = <FontAwesomeIcon icon={faBars} />

  // const [sticky, setSticky]=useState(false);

  const [sidenav, setSidenav] = useState(false);
  const [sticky, setSticky] = useState(false);

  const sidenavShow = () => {
    setSidenav(!sidenav);
  };

  const closeSidenav = () => {
    setSidenav(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close the menu when the component mounts
    closeSidenav();

    // Assume you have a toggle button or some other component that, when clicked, should close the menu
    const toggleButton = document.getElementById('navbar_toggler');
    const menu = document.querySelector('.menu_items');

    // Add a click event listener to the toggle button
    const handleToggleButtonClick = () => {
      menu.classList.toggle('active');
    };

    const handleOtherComponentClick = () => {
      menu.classList.remove('active');
    };

    if (toggleButton) {
      toggleButton.addEventListener('click', handleToggleButtonClick);
    }

    const otherComponent = document.getElementById('otherComponentId');
    if (otherComponent) {
      otherComponent.addEventListener('click', handleOtherComponentClick);
    }

    return () => {
      if (toggleButton) {
        toggleButton.removeEventListener('click', handleToggleButtonClick);
      }
      if (otherComponent) {
        otherComponent.removeEventListener('click', handleOtherComponentClick);
      }
    };
  }, []); 
  const toggleButtonRef = useRef(null);

useEffect(() => {
  const toggleButton = toggleButtonRef.current;
  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      // Your logic here
    });
  }

  // Cleanup code

}, [toggleButtonRef]);

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
            <Link onClick={closeSidenav} activeClass='active' to='/'>
              <h4>Home</h4>
                  </Link>
              </li>
              <li>
            <Link onClick={closeSidenav} to='/about'>
              <h4>About Us</h4>
                  </Link>
              </li>
             
              <li>
            <Link onClick={closeSidenav} to='/export'>
              <h4>Export</h4>
                  </Link>
              </li>
              <li>
              <Link onClick={closeSidenav} to='/manufacture'>
              <h4>Manufacture</h4>
                  </Link>
              </li>
              <li>
            <Link onClick={closeSidenav} to='/contact'>
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
