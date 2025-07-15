// src/components/Contacto.jsx

import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button } from '@mui/material';

function Contacto() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        try {
            const response = await fetch('http://localhost:4000/api/prospectos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.message || 'Algo salió mal');
            setMessage(data.message);
            setFormData({ name: '', email: '', phone: '' });
        } catch (error) {
            setMessage(error.message);
        }
    };

    return (
        // 1. Contenedor principal con la imagen de fondo
        <Box
            id='contacto'
            component="section"
            sx={{
                py: 10, // Padding vertical
                backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url("/fondo-contacto.avif")', // Imagen de fondo con un gradiente oscuro
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Container maxWidth="sm">
                {/* 2. Contenedor tipo "tarjeta" para el formulario */}
                <Box
                    sx={{
                        backgroundColor: 'white', // Fondo gris claro para el formulario
                        p: { xs: 3, md: 5 }, // Padding responsivo
                        borderRadius: 2, // Bordes ligeramente redondeados
                        boxShadow: 24,   // Sombra pronunciada para efecto de profundidad
                    }}
                >
                    <Typography variant="h4" align="center" gutterBottom>
                        Conviértete en Cliente
                    </Typography>
                    <Typography variant="body1" align="center" color="text.secondary" paragraph>
                        Deja tus datos y uno de nuestros asesores se pondrá en contacto contigo a la brevedad.
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <TextField
                            label="Nombre Completo"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            variant="filled" // Un estilo de input diferente
                            fullWidth
                            required
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            label="Correo Electrónico"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            variant="filled"
                            fullWidth
                            required
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            label="Teléfono"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            variant="filled"
                            fullWidth
                            sx={{ mb: 2 }}
                        />
                        <label htmlFor="checkbox" style={{ display: 'flex', alignItems: 'center' }}>
                            <input
                                type="checkbox"
                                id="checkbox"
                                checked={formData.checkbox}
                                onChange={handleChange}
                                style={{ marginRight: '8px' }}
                            />
                            Acepto los términos y condiciones
                        </label>

                        <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            fullWidth
                            sx={{ py: 1.5, mt: 2 }} // Padding y margen para el botón
                        >
                            Solicitar Contacto
                        </Button>
                    </Box>
                     {message && <Typography align="center" sx={{ mt: 2, fontWeight: 'bold' }}>{message}</Typography>}
                </Box>
            </Container>
        </Box>
    );
}

export default Contacto;