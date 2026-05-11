import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/header/Header';
import Navbar from '../components/navbar/Navbar';
import Fooder from '../components/fooder/Fooder';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <Navbar />
      
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar />
        
        {/* El Outlet es donde se cargarán tus páginas (Dashboard, Chat, etc.) */}
        <main style={{ flex: 1, padding: '20px' }}>
          <Outlet />
        </main>
      </div>

      <Fooder />
    </div>
  );
};

export default MainLayout;