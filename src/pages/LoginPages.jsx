// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import './LoginPages.css'; 
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para redirección

function LoginPage() {
    const navigate = useNavigate(); // Inicializa useNavigate
    const [formData, setFormData] = useState({ email: '', password: '' });
    

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Intentando iniciar sesión con:", formData);

        try {
            const response = await fetch('http://localhost:4000/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Algo salió mal');
            }
            console.log('Login exitoso:', data);

            // Guardamos el token en el almacenamiento local del navegador
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user)); // Guardamos el usuario
            navigate('/dashboard'); // Redirige al dashboard del asesor
            //alert('¡Inicio de sesión exitoso!');//
            // Aquí, en el futuro, redirigiríamos al dashboard del asesor.

        } catch (error) {
            console.error('Error en el login:', error);
            alert(`Error: ${error.message}`);
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Acceso Asesores</h2>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Correo Electrónico" required />
                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Contraseña" required />
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
}

export default LoginPage;