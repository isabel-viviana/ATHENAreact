import './mock_config.css';

const MockConfig = () => {
  return (
    <>
      <div className="main__content">
      
            {/*  HEADER  */}
            <section className="page-header">
      
              <div className="page-header__info">
                <h1>Configurar Simulacro</h1>
      
                <p>
                  Personaliza tu prueba según lo que necesites practicar hoy.
                </p>
              </div>
      
            </section>
      
            {/*  CONFIG GRID  */}
            <section className="config-grid">
      
              {/*  LEFT  */}
              <div className="config-card">
      
                <div className="card-title">
                  <i className="fas fa-gear"></i>
                  <h3>Tipo de Prueba</h3>
                </div>
      
                {/*  OPTION  */}
                <label className="option option--active">
      
                  <div className="option__top">
      
                    <div className="option__left">
                      <input type="radio" checked />
      
                      <div>
                        <h4>Simulacro Completo ICFES</h4>
                        <p>Todas las áreas, 4.5 horas</p>
                      </div>
                    </div>
      
                    <span className="recommended">
                      Recomendado
                    </span>
      
                  </div>
      
                </label>
      
                {/*  OPTION  */}
                <label className="option">
      
                  <div className="option__left">
                    <input type="radio" />
      
                    <div>
                      <h4>Por Área Específica</h4>
                      <p>Selecciona una o más áreas</p>
                    </div>
                  </div>
      
                </label>
      
                {/*  OPTION  */}
                <label className="option">
      
                  <div className="option__left">
                    <input type="radio" />
      
                    <div>
                      <h4>Mini Simulacro</h4>
                      <p>Mitad de preguntas, 2 horas</p>
                    </div>
                  </div>
      
                </label>
      
                {/*  EXTRA  */}
                <div className="extra-settings">
      
                  <div className="extra-item">
                    <span>Dificultad</span>
      
                    <select>
                      <option>Media</option>
                      <option>Fácil</option>
                      <option>Difícil</option>
                    </select>
                  </div>
      
                  <div className="extra-item">
                    <span>Tiempo Extra</span>
      
                    <select>
                      <option>No</option>
                      <option>+15 min</option>
                      <option>+30 min</option>
                    </select>
                  </div>
      
                </div>
      
              </div>
      
              {/*  RIGHT  */}
              <div className="config-card">
      
                <div className="card-title">
                  <i className="fas fa-file-lines"></i>
                  <h3>Áreas a evaluar</h3>
                </div>
      
                <div className="subjects">
      
                  <label className="subject">
                    <input type="checkbox" checked />
                    <span>Matemáticas</span>
                  </label>
      
                  <label className="subject">
                    <input type="checkbox" checked />
                    <span>Lectura Crítica</span>
                  </label>
      
                  <label className="subject">
                    <input type="checkbox" checked />
                    <span>Sociales y Ciudadanas</span>
                  </label>
      
                  <label className="subject">
                    <input type="checkbox" checked />
                    <span>Ciencias Naturales</span>
                  </label>
      
                  <label className="subject">
                    <input type="checkbox" checked />
                    <span>Inglés</span>
                  </label>
      
                </div>
      
                {/*  INFO  */}
                <div className="summary-box">
      
                  <div className="summary-item">
                    <span>Preguntas estimadas</span>
                    <strong>278</strong>
                  </div>
      
                  <div className="summary-item">
                    <span>Duración total</span>
                    <strong>4h 30m</strong>
                  </div>
      
                </div>
      
              </div>
      
            </section>
      
            {/*  ACTIONS  */}
            <section className="actions">
      
              <button className="btn btn--secondary">
                Cancelar
              </button>
      
              <button className="btn btn--primary">
                Iniciar Prueba
                <i className="fas fa-play"></i>
              </button>
      
            </section>
      
            {/*  BOT  */}
            <div className="assistant-box">
      
              <div className="assistant-message">
                ¡Sigue así! Estás haciendo un gran trabajo.
              </div>
      
              <div className="assistant-avatar">
                🤖
              </div>
      
            </div>
      
          </div>
    </>
  );
};

export default MockConfig;
