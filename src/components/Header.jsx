import logoIcon from "../../public/imageslogo.svg";

function Header() {
  return (
    <header className="row">
      <div className="header-img-container">
        <img src={logoIcon} alt="page-logo" />
      </div>
      <nav className="header-nav">
        <ul className="row">
          <li><a href="#">Features</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Sign In</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
