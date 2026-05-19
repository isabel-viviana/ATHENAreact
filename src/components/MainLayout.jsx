import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Fooder from './fooder/Fooder';

const MainLayout = () => {
  return (
    <div
      className="layout"
      style={{
        display: 'flex',
        minHeight: '100vh',
        backgroundColor: 'var(--bg-dark)'
      }}
    >

      {/* Sidebar izquierda */}
      <Sidebar />

      {/* Contenedor principal */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          minWidth: 0
        }}
      >

        {/* Contenido principal */}
        <main
          className="main-content"
          style={{
            flex: 1,
            padding: '30px 40px',
            overflowY: 'auto'
          }}
        >
          <Outlet />
        </main>

        {/* Footer */}
        <Fooder />

      </div>
    </div>
  );
};

export default MainLayout;