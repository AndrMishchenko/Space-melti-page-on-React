import React, {useState} from 'react';
import { Link, Outlet} from 'react-router-dom';
import logo from './PhotoNavigation/logo.svg';
import humb from './PhotoNavigation/hamburger.svg';
import close from './PhotoNavigation/close.svg';

const Nav = () => {

  const [clickButton, setClickButton] = useState('home');
  const [imgHumb, setImgHumb] = useState(true);
  const [mobMenu, setMobMenu] = useState(false);

  const onClickButton = (classBTN) => {
    setClickButton(classBTN)
  };

  const changeMenu = () => {
      setMobMenu(true)
      setImgHumb(false)
  }

  const closeMenu = () => {
    setMobMenu(false)
    setImgHumb(true)
  }

  return (
    <>
      <header>
        <div className='nav-img'>
          <img src={logo} alt="Logo" />
        </div>
        <div className='border'></div>
        {imgHumb&& (
          <>
            <img src={humb} onClick={changeMenu} className='open-mob-menu'></img>
          </>
        )}
        {mobMenu && (
          <>
            <div className='mob-menu'>
              <div className='block-close-menu'>
                <img src={close} onClick={closeMenu} className='close-mob-menu'></img>
              </div>
                <div className='block-mob-menu'>
                  <div className='nav'>
                    <Link 
                      to="/" 
                      onClick={() => onClickButton('home')}
                      className={clickButton === 'home' ? 'active' : ''}
                    >Home</Link>
                    <Link 
                      to="/destination"
                      onClick={() => onClickButton('destination')}
                      className={clickButton === 'destination' ? 'active' : ''}
                    >Destination</Link>
                    <Link 
                      to="/crew"
                      onClick={() => onClickButton('crew')}
                      className={clickButton === 'crew' ? 'active' : ''}
                    >Crew</Link>
                    <Link 
                      to="/technology"
                      onClick={() => onClickButton('crew')}
                      className={clickButton === 'tech' ? 'active' : ''}
                    >Technology</Link>
                  </div>
                </div>
            </div>
          </>
        )}
        <div className='navigation'>
          <Link 
            to="/" 
            onClick={() => onClickButton('home')}
            className={clickButton === 'home' ? 'active' : ''}
          >Home</Link>
          <Link 
            to="/destination"
             onClick={() => onClickButton('destination')}
             className={clickButton === 'destination' ? 'active' : ''}
          >Destination</Link>
          <Link 
            to="/crew"
            onClick={() => onClickButton('crew')}
            className={clickButton === 'crew' ? 'active' : ''}
          >Crew</Link>
          <Link 
            to="/technology"
            onClick={() => onClickButton('tech')}
            className={clickButton === 'tech' ? 'active' : ''}
          >Technology</Link>
        </div>

      </header>
      <Outlet />
    </>
  );
};

export default Nav;