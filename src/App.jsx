import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Layout base
import MainLayout from './components/MainLayout';

// Páginas de Autenticación
import LoginStudent from './pages/authentications/login_student';
import RegisterStudent from './pages/authentications/register_student';

// Páginas Internas
import Dashboard from './pages/dashboards/dashboard';
import MockConfig from './pages/mock_exams/mock_config';
import MockQuick from './pages/mock_exams/mock_quick';
import MockExam from './pages/mock_exams/mock_exam';
import MockResult from './pages/mock_exams/mock_results';
import MockReview from './pages/mock_exams/mock_review';
import MockHistory from './pages/mock_exams/mock_history';
import AiTutor from './pages/ai_tutor/chat';
import Practices from './pages/practices/practice_config';
import PracticesFull from './pages/practices/practice_full';
import PracticesResult from './pages/practices/practice_results';
import Profiles from './pages/profiles/profile';
import ProfileLogros from './pages/profiles/profile_achievements';
import ProfileEdit from './pages/profiles/profile_edit';
import Ranking from './pages/ranking/ranking';
import Statistics from './pages/statistics/statistics';
import Analysis from './pages/statistics/analysis';
import Store from './pages/store/store';
import Subscriptions from './pages/subscriptions/subscription';
import Notificaciones from './pages/profiles/profile_notifications';
import Payments from './pages/subscriptions/payments';


function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas sin Sidebar (Login/Registro) */}
        <Route path="/login" element={<LoginStudent />} />
        <Route path="/register" element={<RegisterStudent />} />
        <Route path="/forgotPassword" element={<forgot_password />} />
        
        {/* Rutas con Sidebar (MainLayout) */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/mock-config" element={<MockConfig />} />
          <Route path="/mock-quick" element={<MockQuick />} />
          <Route path="/mock-exam" element={<MockExam/>} />
          <Route path="/mock-result" element={<MockResult/>}/>
          <Route path="/mock-review" element={<MockReview/>}/>
          <Route path="/mock-history" element={<MockHistory/>}/>
          <Route path="/ai-tutor" element={<AiTutor />} />
          <Route path="/practices" element={<Practices />} />
          <Route path="/practices-full" element={<PracticesFull/>}/>
          <Route path="/practices-result" element={<PracticesResult/>}/>
          <Route path="/profile" element={<Profiles />} />
          <Route path="/profile-logros" element={<ProfileLogros/>}/>
          <Route path="/profile-edit" element={<ProfileEdit/>}/>
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/analysis" element={<Analysis/>}/>
          <Route path="/store" element={<Store />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/payments" element={<Payments/>}/>
          <Route path="/notificaciones" element={<Notificaciones/>}/>
        </Route>

        {/* Redirección por defecto */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
