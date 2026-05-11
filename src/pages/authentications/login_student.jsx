import './login_student.css';

const LoginStudent = () => {
  return (
    <>
      <div className="main-container">
              {/*  Panel Izquierdo  */}
              <div className="left-panel">
                  <div className="logo-top">
                      <img src="https://via.placeholder.com/40" alt="Logo Athena" className="small-logo" />
                      <h1>ATHENA</h1>
                  </div>
                  <p className="subtitle">Vamos paso por paso.</p>
                  <div className="mascot-container">
                      {/*  Aquí iría la imagen del zorro con lentes  */}
                      <img src="/Assets/zorrito3d.jpeg" alt="Mascota Athena con gafas" className="mascot" />
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
                          <button type="submit" className="btn-primary">Iniciar sesión</button>
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
                              <a href="#">Crear cuenta</a>
                              <a href="#">¿Olvidaste tu contraseña?</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    </>
  );
};

export default LoginStudent;
