import './register_student.css';
import ZorritoLogo from "../../assets/images/Zorrito6.png";
import Zorrito2D from "../../assets/images/Zorrito2D.png";
import { Link } from 'react-router-dom';


const RegisterStudent = () => {
  return (
    <>
      <div className="main-container">
              {/*  Panel Izquierdo  */}
              <div className="left-panel">
                  <div className="logo-top">
                      <img src={ZorritoLogo} alt="Logo" className='small-logo' />
                      <h1>ATHENA</h1>
                  </div>
                  <p className="subtitle">Vamos paso por paso.</p>
                  <div className="mascot-container">
                      <img src={Zorrito2D} alt="Mascota Athena" className="mascot" />
                  </div>
              </div>
      
              {/*  Panel Derecho  */}
              <div className="right-panel">
                  <div className="form-container">
                      <h2>Crear cuenta estudiante</h2>
                      <p className="description">Ingresa tu correo o número para continuar.</p>
      
                      <form>
                          <input type="text" placeholder="Correo electrónico o número" className="input-field" />
                          <Link to="/login"><button type="submit" className="btn-primary">Continuar</button></Link>
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
      
                      <p className="footer-text">
                          Al continuar, aceptas Términos y Condiciones y Política de privacidad
                      </p>
                  </div>
              </div>
          </div>
    </>
  );
};

export default RegisterStudent;
