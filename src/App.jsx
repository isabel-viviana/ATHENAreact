import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Layout base
import MainLayout from './components/MainLayout';

// Páginas de Autenticación
import LoginStudent from './pages/authentications/login_student';
import RegisterStudent from './pages/authentications/register_student';

// Páginas Internas
import Dashboard from './pages/dashboards/dashboard';
import MockExams from './pages/mock_exams/mock_exam';
import AiTutor from './pages/ai_tutor/chat';
import Practices from './pages/practices/practice_config';
import Profiles from './pages/profiles/profile';
import Ranking from './pages/ranking/ranking';
import Statistics from './pages/statistics/statistics';
import Store from './pages/store/store';
import Subscriptions from './pages/subscriptions/subscription';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas sin Sidebar (Login/Registro) */}
        <Route path="/login" element={<LoginStudent />} />
        <Route path="/register" element={<RegisterStudent />} />
        
        {/* Rutas con Sidebar y Header (MainLayout) */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/mock-exams" element={<MockExams />} />
          <Route path="/ai-tutor" element={<AiTutor />} />
          <Route path="/practices" element={<Practices />} />
          <Route path="/profile" element={<Profiles />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/store" element={<Store />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
        </Route>

        {/* Redirección por defecto */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
