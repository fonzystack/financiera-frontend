// src/components/RegisterAdvisorForm.jsx

import React, { useState } from 'react';
import './RegisterAdvisorForm.css'; // Asegúrate de tener un archivo CSS para estilos

function RegisterAdvisorForm() {
    const [formData, setFormData] = useState({ email: '', password: '', role: 'asesor' });
    const [message, setMessage] = useState('');

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        const token = localStorage.getItem('token');

        try {
            const response = await fetch('http://localhost:4000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` // ¡Enviamos el token de admin!
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.message);
            setMessage(data.message);
            setFormData({ email: '', password: '', role: 'asesor' }); // Limpiamos el formulario
        } catch (error) {
            setMessage(error.message);
        }
    };

    return (
        <div className="register-advisor-form">
            <h3>Registrar Nuevo Usuario</h3>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email del nuevo usuario" required />
                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Contraseña temporal" required />
                <select name="role" value={formData.role} onChange={handleChange}>
                    <option value="asesor">Asesor</option>
                    <option value="admin">Administrador</option>
                </select>
                <button type="submit">Registrar Usuario</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default RegisterAdvisorForm;