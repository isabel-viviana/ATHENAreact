import './login_student.css';
import Zorrito2D from "../../assets/images/Zorrito2D.png";
import ZorritoLogo from "../../assets/images/Zorrito6.png";
import { Link } from 'react-router-dom';

const LoginStudent = () => {
  return (
    <>
      <div className="main-container">
              {/*  Panel Izquierdo  */}
              <div className="left-panel">
                  <div className="logo-top">
                      <img src={ZorritoLogo} alt="Logo Athena" className="small-logo" />
                      <h1>ATHENA</h1>
                  </div>
                  <p className="subtitle">Vamos paso por paso.</p>
                  <div className="mascot-container">
                      <img src={Zorrito2D} alt="Mascota Athena con gafas" className="mascot" />
                  </div>
              </div>
      
              {/*  Panel Derecho  */}
              <div className="right-panel">
                  <div className="form-container">
                      <h2>Ingresa a tu cuenta de estudiante ATHENA</h2>
                      <p className="description">Ingresa tu correo o número para continuar.</p>
      
                      <form>
                          <input type="text" placeholder="Correo electrónico" className="input-field" />
                          <input type="password" placeholder="Contraseña" className="input-field password-input" />
                          <Link to="/dashboard"><button type="submit" className="btn-primary">Iniciar sesión</button></Link>
                      </form>
      
                      <div className="divider">
                          <span>ó</span>
                      </div>
      
                      <div className="social-buttons">
                          <button className="btn-social">
                              <i className="fab fa-google"></i> Continuar con Google
                          </button>
                          <button className="btn-social">
                              <i className="fab fa-facebook-f"></i> Continuar con Facebook
                          </button>
                          <button className="btn-social">
                              <i className="fab fa-apple"></i> Continuar con Apple
                          </button>
                      </div>
      
                      <div className="footer-section">
                          <p className="terms-text">
                              Al continuar, aceptas Términos y Condiciones y Política de privacidad
                          </p>
                          <div className="footer-links">
                            <Link to="/register">Crear Cuenta</Link>
                            <Link to="/forgotPassword">¿Olvidaste la contraseña?</Link>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    </>
  );
};

export default LoginStudent;
