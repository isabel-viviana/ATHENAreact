import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Panel de Control - ATHENA</h1>
        <div className="user-profile">
          <span className="notifications">🔔</span>
          <div className="user-info">
            <p className="user-name">Usuario Estudiante</p>
            <p className="user-role">ADSO - SENA</p>
          </div>
          <img src="/img/user-avatar.png" alt="Avatar" className="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;