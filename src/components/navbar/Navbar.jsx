import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="global-navbar">
            <div className="global-navbar-search">
                <input type="text" placeholder="Buscar m�dulos, recursos..." />
            </div>
            <div className="global-navbar-links">
                <a href="#">Ayuda</a>
                <a href="#">Configuraci�n</a>
            </div>
        </nav>
    );
};

export default Navbar;
