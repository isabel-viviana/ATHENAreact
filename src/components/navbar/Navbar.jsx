import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-search">
        <input type="text" placeholder="Buscar simulacros, temas..." />
      </div>
      <div className="navbar-links">
        <a href="#noticias">Noticias</a>
        <a href="#ayuda">Ayuda</a>
      </div>
    </nav>
  );
};

export default Navbar;