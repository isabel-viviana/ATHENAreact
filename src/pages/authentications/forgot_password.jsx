import './forgot_password.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/reset-password');
    };

    return (
        <div className="forgot-page">
            <div className="forgot-card">
                <h2>Recuperar contraseña</h2>
                <p>Introduce tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.</p>

                <form onSubmit={handleSubmit} className="forgot-form">
                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input-field"
                        required
                    />

                    <button type="submit" className="btn-primary">Enviar enlace</button>
                </form>

                <div className="forgot-footer">
                    <Link to="/login">Volver al login</Link>
                </div>

            </div>

        </div>
        
    );
};

export default ForgotPassword;
