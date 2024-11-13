import PageLinks from './PageLinks';
import SocialLinks from './SocialLinks';
import Header from './Header';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-center">
          <Header />
          <PageLinks parentClass="nav-links" itemClass="nav-link" />
          <SocialLinks parentClass="nav-icons" itemClass="nav-icon"/>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
