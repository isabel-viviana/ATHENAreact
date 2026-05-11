import { Link, useLocation } from 'react-router-dom';
import '../assets/styles/dashboard.css'; 

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <h2>ATHENA</h2>
      <nav>
        <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''}>Inicio</Link>
        <Link to="/mock-exams" className={location.pathname === '/mock-exams' ? 'active' : ''}>Simulacros</Link>
        <Link to="/practices" className={location.pathname === '/practices' ? 'active' : ''}>Prácticas</Link>
        <Link to="/ai-tutor" className={location.pathname === '/ai-tutor' ? 'active' : ''}>Tutor IA</Link>
        <Link to="/analytics" className={location.pathname === '/analytics' ? 'active' : ''}>Estadísticas</Link>
        <Link to="/profile" className={location.pathname === '/profile' ? 'active' : ''}>Perfil</Link>
      </nav>
    </div>
  );
};

export default Sidebar;