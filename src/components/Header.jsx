import logo from '../assets/images/logo.svg'

function Header() {
  return (
    <div className="nav-header">
      <img src={logo} className="nav-logo" alt="backroads" />
      <button type="button" className="nav-toggle" id="nav-toggle">
        <i className="fas fa-bars" />
      </button>
    </div>
  );
}

export default Header;
