import React from 'react';
import './Footer.css';
import footerImg from '../../assets/img/footer.png'


function Footer() {
  const url="http://toronto.ca/covid19";
  return (
    <footer>
      <a href={url} target="_blank">
        <img src={footerImg} alt="footer" />
      </a>
    </footer>
  );
}

export default Footer;
