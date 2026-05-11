import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="global-navbar">
      <div className="global-navbar-search">
        <input type="text" placeholder="Buscar módulos, recursos..." />
      </div>
      <div className="global-navbar-links">
        <a href="#">Ayuda</a>
        <a href="#">Configuración</a>
      </div>
    </nav>
  );
};

export default Navbar;
