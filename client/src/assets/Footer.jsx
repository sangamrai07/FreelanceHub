import React from 'react';
import './css/Footer.scss'

function Footer() {
  return (
    <footer>
      <div className="footerLeft">
        <div className="footerMenu">
          <h1 className="fMenuTitle">Our Headquarter</h1>
          <ul className="fList">
            <li className="fListItem">Kathmandu Metropolitan,</li>
            <li className="fListItem">Kathmandu, Nepal</li>
          </ul>
        </div>
        <div className="footerMenu">
          <h1 className="fMenuTitle">General Queries</h1>
          <ul className="fList">
            <li className="fListItem">vastralaya@gmail.com</li>
            <li className="fListItem">YourVastra12@gmail.com</li>
          </ul>
        </div>
        <div className="footerMenu">
          <h1 className="fMenuTitle">Call Us</h1>
          <ul className="fList">
            <li className="fListItem">+977 9892330032</li>
            <li className="fListItem">+977 9800144777</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="footerRight">
        <div className="footerRightMenu">
          <h1 className="fMenuTitle">Join Our Community</h1>
          <div className="fMail">
            <input type="text" placeholder="your@gmail.com" className="fInput" />
            <button className="fButton">Join!</button>
          </div>
        </div>
        <div className="footerRightMenu">
          <h1 className="fMenuTitle1">Follow Us</h1>
          <div className="fIcons">
            <img src="" alt="X" className="fIcon" />
            <img src="" alt="X" className="fIcon" />
            <img src="" alt="X" className="fIcon" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

