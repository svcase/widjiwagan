import React from 'react';

function Footer(props) {
  return (
    <div>
      <p className="footer-text">© {new Date().getFullYear()} Sam Case</p>
    </div>
  )
};

export default Footer;
