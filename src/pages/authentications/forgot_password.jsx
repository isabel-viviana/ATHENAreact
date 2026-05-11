import React from 'react';

export default function ForgotPassword() {
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

<h2>Recuperar contraseña</h2>
<p>Te enviaremos un enlace a tu correo.</p>

<form>
<input type="email" className="auth-input" placeholder="Correo electrónico" />

<button type="submit" className="auth-button">Enviar</button>
</form>

</div>
</div>

</div>


</>
  );
}
