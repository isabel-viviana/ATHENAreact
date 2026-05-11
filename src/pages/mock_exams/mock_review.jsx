import React from 'react';

export default function MockReview() {
  return (
    <>


<div className="layout">



<main className="main">

<h1>Revisión</h1>

<div className="card">
    <p>¿Resultado correcto?</p>
</div>

<div className="card">
    <button className="option wrong">Tu respuesta</button>
    <button className="option correct">Respuesta correcta</button>
</div>

<div className="card">
    <p>Explicación aquí...</p>
</div>

<div className="actions">
    <button className="btn-secondary">Anterior</button>
    <button className="btn-primary">Siguiente</button>
</div>

</main>
</div>


</>
  );
}
