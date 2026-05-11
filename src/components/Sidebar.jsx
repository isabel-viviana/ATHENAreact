import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'sidebar__link--active' : '';
  };

  return (
    <aside className="sidebar">
      <div className="sidebar__logo">
        <i className="fas fa-brain"></i>
        <span className="sidebar__brand">ATHENA</span>
      </div>
      <nav className="sidebar__nav">
        <Link to="/dashboard" className={`sidebar__link ${isActive('/dashboard')}`}>
          <i className="fas fa-home"></i>
          <span>Inicio</span>
        </Link>
        <Link to="/mock-exams" className={`sidebar__link ${isActive('/mock-exams')}`}>
          <i className="fas fa-clipboard-check"></i>
          <span>Simulacros</span>
        </Link>
        <Link to="/practices" className={`sidebar__link ${isActive('/practices')}`}>
          <i className="fas fa-dumbbell"></i>
          <span>Prácticas</span>
        </Link>
        <Link to="/ai-tutor" className={`sidebar__link ${isActive('/ai-tutor')}`}>
          <i className="fas fa-robot"></i>
          <span>Tutor IA</span>
        </Link>
        <Link to="/ranking" className={`sidebar__link ${isActive('/ranking')}`}>
          <i className="fas fa-trophy"></i>
          <span>Ranking</span>
        </Link>
        <Link to="/statistics" className={`sidebar__link ${isActive('/statistics')}`}>
          <i className="fas fa-chart-pie"></i>
          <span>Estadísticas</span>
        </Link>
        <Link to="/store" className={`sidebar__link ${isActive('/store')}`}>
          <i className="fas fa-store"></i>
          <span>Tienda</span>
        </Link>
        <Link to="/subscriptions" className={`sidebar__link ${isActive('/subscriptions')}`}>
          <i className="fas fa-star"></i>
          <span>Suscripciones</span>
        </Link>
        <Link to="/profile" className={`sidebar__link ${isActive('/profile')}`}>
          <i className="fas fa-user-circle"></i>
          <span>Perfil</span>
        </Link>
        <Link to="/notifications" className="sidebar__link sidebar__link--notifications">
          <i className="fas fa-bell"></i>
          <span>Notificaciones</span>
          <span className="sidebar__badge">3</span>
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
