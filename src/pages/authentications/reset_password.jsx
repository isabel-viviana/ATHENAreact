import React from 'react';

export default function ResetPassword() {
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

<h2>Nueva contraseña</h2>

<form>
<input type="password" className="auth-input" placeholder="Nueva contraseña" />
<input type="password" className="auth-input" placeholder="Confirmar contraseña" />

<button type="submit" className="auth-button">Guardar</button>
</form>

</div>
</div>

</div>


</>
  );
}
