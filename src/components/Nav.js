import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/">
        <img src="/CatwikiLogo.svg" alt="logo cat" />
      </Link>
    </nav>
  );
};

export default Nav;
