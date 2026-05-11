import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Layout y Componentes base
import MainLayout from './components/MainLayout';

// Páginas de Autenticación
import LoginStudent from './pages/authentications/login_student';
import RegisterStudent from './pages/authentications/register_student';

// Páginas Internas (Asegúrate de que los nombres de archivo coincidan)
import Dashboard from './pages/dashboards/dashboard';
import MockExam from './pages/mock_exams/mock_exam';
import ChatTutor from './pages/ai_tutor/chat'; // o el nombre que tenga tu archivo .jsx
import Analytics from './pages/analytics/analytics';
import Profile from './pages/profiles/profile';

function App() {
  return (
    <Router>
      <Routes>
        {/* 1. RUTAS PÚBLICAS: Sin Sidebar ni Header */}
        <Route path="/login" element={<LoginStudent />} />
        <Route path="/register" element={<RegisterStudent />} />

        {/* 2. RUTAS PRIVADAS: Todas envueltas en el MainLayout */}
        <Route element={<MainLayout />}>
          {/* Al entrar a /dashboard, se carga el Sidebar + Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />
          
          {/* Agregamos el resto de tus módulos */}
          <Route path="/mock-exams" element={<MockExam />} />
          <Route path="/ai-tutor" element={<ChatTutor />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* 3. REDIRECCIÓN: Si el usuario escribe cualquier cosa loca, al Login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
