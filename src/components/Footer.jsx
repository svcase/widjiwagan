import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <p className="footer-text">© {new Date().getFullYear()} <a className="copyLink" href="https://samuelcase.com/">Sam Case</a></p>
    </div>
  )
};

export default Footer;
