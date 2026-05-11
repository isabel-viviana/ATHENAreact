import './profile_edit.css';

const ProfileEdit = () => {
  return (
    <>
      {/*  decorative blur  */}
          <div className="bg-blur bg-blur--one"></div>
          <div className="bg-blur bg-blur--two"></div>
      
          {/*  PROFILE CARD  */}
          <section className="profile-wrapper">
      
            <div className="profile-card">
      
              <div className="profile-card__header">
      
                <div>
                  <h1>Editar Perfil</h1>
                  <p>
                    Actualiza tu información personal y académica.
                  </p>
                </div>
      
                <div className="profile-level">
                  <span className="profile-level__badge">
                    Nivel Alto
                  </span>
                </div>
      
              </div>
      
              {/*  FORM  */}
              <form className="profile-form">
      
                {/*  row  */}
                <div className="form-row">
      
                  <div className="input-group">
                    <label>Nombre Completo</label>
      
                    <div className="input-wrapper">
                      <i className="fas fa-user"></i>
      
                      <input
                        type="text"
                        value="Andrés Estudiante"
                       />
                    </div>
                  </div>
      
                </div>
      
                {/*  row  */}
                <div className="form-row">
      
                  <div className="input-group">
                    <label>Colegio</label>
      
                    <div className="input-wrapper">
                      <i className="fas fa-school"></i>
      
                      <input
                        type="text"
                        value="Colegio San Juan Bosco"
                       />
                    </div>
                  </div>
      
                </div>
      
                {/*  row  */}
                <div className="form-grid">
      
                  <div className="input-group">
                    <label>Meta ICFES</label>
      
                    <div className="input-wrapper">
                      <i className="fas fa-chart-line"></i>
      
                      <input
                        type="number"
                        value="350"
                       />
                    </div>
                  </div>
      
                  <div className="input-group">
                    <label>Correo Electrónico</label>
      
                    <div className="input-wrapper">
                      <i className="fas fa-envelope"></i>
      
                      <input
                        type="email"
                        value="andres@athena.com"
                       />
                    </div>
                  </div>
      
                </div>
      
                {/*  STATS  */}
                <div className="profile-stats">
      
                  <div className="stat-box">
                    <span>Simulacros</span>
                    <strong>12</strong>
                  </div>
      
                  <div className="stat-box">
                    <span>Puntaje Máx.</span>
                    <strong>340</strong>
                  </div>
      
                  <div className="stat-box">
                    <span>Racha</span>
                    <strong>12 días</strong>
                  </div>
      
                </div>
      
                {/*  ACTIONS  */}
                <div className="profile-actions">
      
                  <button
                    type="button"
                    className="btn btn--ghost"
                  >
                    Cancelar
                  </button>
      
                  <button
                    type="submit"
                    className="btn btn--primary"
                  >
                    <i className="fas fa-save"></i>
                    Guardar Cambios
                  </button>
      
                </div>
      
              </form>
      
            </div>
      
          </section>
      
          {/*  FLOATING HELP  */}
          <div className="assistant-help">
      
            <div className="assistant-help__message">
              ¡Sigue así! Estás haciendo
              un gran trabajo.
            </div>
      
            <div className="assistant-help__avatar">
              🤖
            </div>
      
          </div>
    </>
  );
};

export default ProfileEdit;
