import React from 'react';

export default function MockExam() {
  return (
    <>


<div className="layout">



<main className="main">

<h1>Pregunta 1 de 10</h1>

<div className="card">
    <p>¿Qué número continúa la serie?</p>
    <p>2, 4, 6, 8, ?</p>
</div>

<div className="card">

    <button className="option">10</button>
    <button className="option">12</button>
    <button className="option">14</button>
    <button className="option">16</button>

</div>

<div className="actions">
    <button className="btn-secondary">Omitir</button>
    <button className="btn-primary">Responder</button>
</div>

</main>
</div>


</>
  );
}
