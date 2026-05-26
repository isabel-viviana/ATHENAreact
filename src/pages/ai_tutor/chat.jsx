import './chat.css';

const Chat = () => {
    return (
        <>
            <div className="main__content">
        
                {/*  HEADER  */}
                <section className="tutor-header">
        
                <div className="tutor-header__left">
        
                    <div className="tutor-avatar">
                        <i className="fas fa-robot"></i>
                    </div>
        
                    <div>
                        <h1>Tutor ATHENA</h1>
            
                        <div className="tutor-status">
                            <span className="status-dot"></span>
                            En línea
                        </div>
                    </div>
        
                </div>
        
                <button className="refresh-btn">
                    <i className="fas fa-rotate-right"></i>
                </button>
        
                </section>
        
                {/*  IA MESSAGE  */}
                <section className="ai-message">
        
                    <div className="ai-message__top">
                        <div className="mini-avatar">
                            <i className="fas fa-brain"></i>
                        </div>
            
                        <div>
                            <h3>Hola, soy ATHENA</h3>
                            <p>
                                Puedo ayudarte con preguntas tipo ICFES,
                                análisis de resultados y explicaciones paso a paso.
                            </p>
                        </div>
                    </div>
            
                    <div className="tip-box">
                        <i className="fas fa-bolt"></i>
                        <span>
                            Te recomiendo enfocarte en <strong>Inglés</strong> esta semana.
                        </span>
                    </div>
        
                </section>
        
                {/*  ACTIONS  */}
                <section className="actions-grid">
        
                    <button className="action-card action-card--blue">
                        <i className="fas fa-book-open"></i>
                        <span>Explicar un concepto</span>
                    </button>
            
                    <button className="action-card action-card--purple">
                        <i className="fas fa-circle-question"></i>
                        <span>Resolver una pregunta</span>
                    </button>
            
                    <button className="action-card action-card--green">
                        <i className="fas fa-chart-line"></i>
                        <span>Analizar resultados</span>
                    </button>
            
                    <button className="action-card action-card--yellow">
                        <i className="fas fa-bullseye"></i>
                        <span>Practicar conmigo</span>
                    </button>
        
                </section>
        
                {/*  EMPTY CHAT  */}
                <section className="chat-empty">
        
                    <div className="chat-empty__icon">
                        <i className="fas fa-comments"></i>
                    </div>
            
                    <h3>Tu conversación aparecerá aquí</h3>
            
                    <p>
                        Pregunta cualquier duda académica y ATHENA te ayudará.
                    </p>
            
                </section>
        
                {/*  INPUT  */}
                <section className="chat-input">
        
                    {/*  FILE UPLOAD  */}
                    <label className="upload-btn">
            
                        <input type="file" hidden />
                        <i className="fas fa-paperclip"></i>
            
                    </label>
            
                    <input
                        type="text"
                        placeholder="Ej: Explícame esta pregunta de lectura crítica..."
                    />
            
                    <button className="image-btn">
                        <i className="fas fa-image"></i>
                    </button>
            
                    <button className="send-btn">
                        <i className="fas fa-paper-plane"></i>
                    </button>
        
                </section>
        
                <p className="disclaimer">
                    ATHENA puede cometer errores. Verifica siempre la información importante.
                </p>
        
            </div>

        </>
        
    );
};

export default Chat;
