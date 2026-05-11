import React from 'react';

export default function PracticeConfig() {
  return (
    <>


<div className="layout">



<main className="main">

<h1>Configurar práctica</h1>

<div className="card">
    <h3>Modo</h3>

    <button className="option">Preguntas rápidas</button>
    <button className="option">Solo errores</button>
    <button className="option">Tema específico</button>
</div>

<div className="card">
    <h3>Cantidad</h3>

    <button className="option">5</button>
    <button className="option">10</button>
    <button className="option">20</button>
</div>

<button className="btn-primary">Iniciar práctica</button>

</main>
</div>


</>
  );
}
