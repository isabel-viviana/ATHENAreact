import React from 'react';

export default function Profile() {
  return (
    <>


<div className="layout">



<main className="main">

<div className="header">
    <h1>Perfil</h1>
    <p className="text-muted">Gestiona tu cuenta</p>
</div>

<div className="card">
    <h2>Andrés Estudiante</h2>
    <p className="text-muted">Nivel 15 • 3250 XP</p>
    <a href="profile_edit.html" className="btn-primary">Editar perfil</a>
</div>

<div className="grid grid-2">

<a href="achievements.html" className="card">
    <h3>Logros</h3>
    <p className="text-muted">15 desbloqueados</p>
</a>

<a href="history.html" className="card">
    <h3>Historial</h3>
    <p className="text-muted">24 pruebas</p>
</a>

<a href="store.html" className="card">
    <h3>Tienda</h3>
    <p className="text-muted">Usa tus monedas</p>
</a>

<a href="subscription.html" className="card">
    <h3>Suscripción</h3>
    <p className="text-muted">Premium activo</p>
</a>

</div>

<a href="profile_settings.html" className="btn-secondary">Configuración</a>
<button className="btn-danger">Cerrar sesión</button>

</main>
</div>


</>
  );
}
