import React, { useEffect, useState } from 'react';
import './css/Navbar.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import myImg from './clothes.png'
import newRequest from '../utils/newRequest';

function Navbar() {
  const [active, setActive] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    
    const navigate = useNavigate()

  const { pathname } = useLocation();
    const activeUser = JSON.parse(localStorage.getItem("activeUser"));

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };
    
    const handleLogout = async () => {
        try {
            await newRequest.post("auth/logout")
            localStorage.setItem("activeUser", null);
            navigate('/')
        } catch (err) {
            
        }
    }

  useEffect(() => {
    window.addEventListener('scroll', isActive);
    return () => {
      window.removeEventListener('scroll', isActive);
    };
  }, []);

  return (
    <>
      <div className={active || pathname !== '/' ? 'navbar active' : 'navbar'}>
        <div className="container">
          <div className="logo">
            <Link className="link" to="/">
              <span className="text">Freelance-Hub</span>
            </Link>
          </div>
          <div className="links">
            <Link className="link" to="/">
              About Us
            </Link>
            <Link className="link" to="/">
              Explore
            </Link>
            {activeUser?.isSeller && <span>Switch to Seller</span>}
            {!activeUser && <Link to='/signup'><button>Register</button></Link>}
            {activeUser && (
              <div className="user" onClick={() => setShowMenu(!showMenu)}>
                <img src={activeUser.image || {myImg} } />
                <span>{activeUser?.name}</span>
                {showMenu && (
                  <div className="options">
                    {activeUser?.isSeller && (
                      <>
                        <Link className="link" to="/myGigs">
                          Gigs
                        </Link>
                        <Link className="link" to="/addGigs">
                          Add New Gig
                        </Link>
                      </>
                    )}
                    <Link className="link" to="/allChat">
                      All Chat
                    </Link>
                    <Link className="link" to="/orders">
                      Orders
                    </Link>
                    <Link className="link" onClick={handleLogout}>
                      Logout
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        {(active || pathname !== '/') && (
          <>
            <hr />
            <div className="menu">
              <Link className="link menuLink" to="/">
                Programming & Tech
              </Link>
              <Link className="link menuLink" to="/">
                Video & Animation
              </Link>
              <Link className="link menuLink" to="/">
                Writing & Translation
              </Link>
              <Link className="link menuLink" to="/">
                Graphics & Design
              </Link>
              <Link className="link menuLink" to="/">
                Ads Creation
              </Link>
              <Link className="link menuLink" to="/">
                Digital Marketing
              </Link>
              <Link className="link menuLink" to="/">
                Music
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Navbar;

