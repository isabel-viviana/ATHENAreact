import React from 'react';
import '../../assets/styles/authentication.css';

export default function LoginStudent() {
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

<h2>Ingresa a tu cuenta</h2>
<p>Ingresa tu correo para continuar.</p>

<form>
<input type="email" className="auth-input" placeholder="Correo electrónico" />
<input type="password" className="auth-input" placeholder="Contraseña" />

<button type="submit" className="auth-button">Iniciar sesión</button>
</form>

<div className="divider"><span></span> ó <span></span></div>

<button className="social-btn">Google</button>
<button className="social-btn">Facebook</button>
<button className="social-btn">Apple</button>

<div className="auth-links">
    <a href="#">Crear cuenta</a>
    <a href="#">¿Olvidaste?</a>
</div>

</div>
</div>

</div>


</>
  );
}
