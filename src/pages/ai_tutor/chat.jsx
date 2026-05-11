import React from 'react';
import '../../assets/styles/ai_tutor.css';

export default function Chat() {
  return (
    <>


<div className="layout">

{/* SIDEBAR */}


{/* MAIN */}
<main className="main chat-container">

    {/* HEADER */}
    <div className="chat-header">
        <h1>Tutor IA</h1>
        <span className="status">● Activo</span>
    </div>

    {/* MESSAGES */}
    <div className="chat-messages">

        <div className="message ai">
            <p>Hola, ¿en qué te puedo ayudar?</p>
        </div>

        <div className="message user">
            <p>Explícame esta pregunta</p>
        </div>

        <div className="message ai">
            <p>Claro, vamos paso a paso...</p>
        </div>

    </div>

    {/* INPUT */}
    <form className="chat-input">
        <input type="text" placeholder="Escribe tu mensaje..." />
        <button type="submit" className="btn-primary">Enviar</button>
    </form>

</main>

</div>

</>
  );
}
