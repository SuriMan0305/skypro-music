import "../css/nav.css";
import NavMenu from "./MenuNav";

const NavPanel = () => {
  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src="img/logo.png" alt="logo" />
      </div>
      <div className="nav__burger burger">
        <span className="burger__line" />
        <span className="burger__line" />
        <span className="burger__line" />
      </div>
      <div className="nav__menu menu">
        <ul className="menu__list">
          <NavMenu title="Главное" />
          <NavMenu title="Мой плейлист" />
          <NavMenu title="Войти" adress="../signin.html" />
        </ul>
      </div>
    </nav>
  );
};

export default NavPanel;
