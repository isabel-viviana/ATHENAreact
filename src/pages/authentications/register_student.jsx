import React from 'react';

export default function RegisterStudent() {
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

<h2>Crear cuenta estudiante</h2>
<p>Ingresa tu correo o número para continuar.</p>

<form>
<input type="text" className="auth-input" placeholder="Correo o número" />
<button type="submit" className="auth-button">Continuar</button>
</form>

<div className="divider"><span></span> ó <span></span></div>

<button className="social-btn">Continuar con Google</button>
<button className="social-btn">Continuar con Facebook</button>
<button className="social-btn">Continuar con Apple</button>

</div>
</div>

</div>


</>
  );
}
