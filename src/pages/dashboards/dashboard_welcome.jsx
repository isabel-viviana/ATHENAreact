import React from 'react';

export default function DashboardWelcome() {
  return (
    <>


<div className="layout">

{/* SIDEBAR */}
<div className="sidebar">
    <h2>ATHENA</h2>
    <a className="active">Inicio</a>
    <a>Prácticas</a>
    <a>Simulacros</a>
    <a>Ranking</a>
    <a>Estadísticas</a>
    <a>Tutor IA</a>
    <a>Logros</a>
    <a>Perfil</a>
</div>

{/* MAIN */}
<div className="main">

<div className="welcome-card">

<div className="welcome-text">
<h1>¡Bienvenido a ATHENA!</h1>
<p>Tu prueba gratuita ha comenzado.</p>

<ul>
<li>✔ Tienes 7 días de acceso completo</li>
<li>✔ Podrás usar todas las funciones</li>
<li>✔ Luego necesitarás suscripción</li>
</ul>

<button className="btn-primary">Empezar</button>
</div>

<img src="/assets/cat.png" className="welcome-img" />

</div>

</div>

</div>


</>
  );
}
