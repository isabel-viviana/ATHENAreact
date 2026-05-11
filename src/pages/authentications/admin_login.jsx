import React from 'react';

export default function AdminLogin() {
  return (
    <>


<div className="auth-container">

<div className="auth-left">
    
    <div className="brand">
        <img src="/assets/logo.png" />
        <h1>ATHENA</h1>
    </div>
    <p>Vamos paso por paso.</p>
    <img src="/assets/cat.png" />
</div>

<div className="auth-right">
<div className="auth-box">

<h2>Acceso administrador ATHENA</h2>
<p>Ingresa tus credenciales para continuar.</p>

<form>
<input type="email" className="auth-input" placeholder="Correo electrónico" />
<input type="password" className="auth-input" placeholder="Contraseña" />

<button type="submit" className="auth-button">Iniciar sesión</button>
</form>

<div className="auth-links">
    <a href="#">Crear cuenta</a>
    <a href="#">¿Olvidaste tu contraseña?</a>
</div>

</div>
</div>

</div>


</>
  );
}
