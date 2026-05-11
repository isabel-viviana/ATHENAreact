import React from 'react';
import '../../assets/styles/dashboard.css';

export default function Dashboard() {
  return (
    <>


<div className="layout">

{/* SIDEBAR */}
<div className="sidebar">
    <h2>ATHENA</h2>
    <a className="active">Inicio</a>
    <a>Simulacros</a>
    <a>Prácticas</a>
    <a>Tutor IA</a>
    <a>Estadísticas</a>
    <a>Perfil</a>
</div>

{/* MAIN */}
<div className="main">

{/* HEADER */}
<div className="header-card">
    <h1>¡Hola, Estudiante! 👋</h1>
    <p>Tu objetivo: <b>350 puntos</b>. Estás a 45 puntos de alcanzarlo.</p>

    <div className="stats">
        <div className="stat">
            <h3>12</h3>
            <span>Racha</span>
        </div>

        <div className="stat">
            <h3>305</h3>
            <span>Puntaje</span>
        </div>
    </div>
</div>

{/* RECOMENDADO */}
<div className="card big">
    <div>
        <span className="badge">RECOMENDADO</span>
        <h2>Simulacro Rápido</h2>
        <p>Refuerza lectura crítica y mejora tu puntaje.</p>

        <button className="btn-primary">Comenzar ahora</button>
    </div>

    <img src="/assets/book.png" />
</div>

{/* GRID */}
<div className="grid">

{/* ACTIVIDAD */}
<div className="card">
    <h3>Actividad reciente</h3>

    <div className="list-item">
        <span>Práctica Matemáticas</span>
        <b>80%</b>
    </div>

    <div className="list-item">
        <span>Chat IA</span>
        <b>✔</b>
    </div>

    <div className="list-item">
        <span>Simulacro Ciencias</span>
        <b>65%</b>
    </div>

</div>

{/* DESAFIOS */}
<div className="card">
    <h3>Desafíos</h3>

    <div className="progress">
        <p>Completar 3 simulacros</p>
        <div className="bar"><div style={{"width":"70%"}}></div></div>
    </div>

    <div className="progress">
        <p>Mantener racha</p>
        <div className="bar"><div style={{"width":"100%"}}></div></div>
    </div>

</div>

</div>

</div>

</div>


</>
  );
}
