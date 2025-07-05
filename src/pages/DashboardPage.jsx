// src/pages/DashboardPage.jsx

// src/pages/DashboardPage.jsx

import React, { useState, useEffect } from 'react';
import './DashboardPage.css';
import RegisterAdvisorForm from '../components/RegisterAdvisorform';

function DashboardPage() {
    const [prospectos, setProspectos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const user = JSON.parse(localStorage.getItem('user'));

    // Esta función ahora puede ser llamada para recargar los datos
    const fetchProspectos = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) throw new Error('No se encontró token de autenticación.');

            const response = await fetch('http://localhost:4000/api/prospectos', {
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if (!response.ok) throw new Error('No estás autorizado para ver esta información.');

            const data = await response.json();
            setProspectos(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // useEffect llama a la función para cargar los datos al inicio
    useEffect(() => {
        fetchProspectos();
    }, []);

    // Esta función se pasará a cada tarjeta para manejar la actualización
    const handleUpdateProspecto = async (id, updatedData) => {
        try {
            const token = localStorage.getItem('token');
            await fetch(`http://localhost:4000/api/prospectos/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(updatedData)
            });
            // Recargamos los datos para ver los cambios reflejados
            fetchProspectos(); 
        } catch (error) {
            console.error("Error al actualizar:", error);
            alert("No se pudo guardar los cambios.");
        }
    };

    if (loading) return <p>Cargando prospectos...</p>;
    if (error) return <p className="error-message">{error}</p>;

    return (
        <div className="dashboard-container">
            <h2>Panel de Asesores - Prospectos</h2>
            {/* --- RENDERIZADO CONDICIONAL --- */}
            {user && user.role === 'admin' && <RegisterAdvisorForm />}
            <div className="prospectos-list">
                {prospectos.length > 0 ? (
                    prospectos.map(prospecto => (
                        <ProspectoCard 
                            key={prospecto._id} 
                            prospecto={prospecto} 
                            onUpdate={handleUpdateProspecto}
                        />
                    ))
                ) : (
                    <p>No hay prospectos para mostrar.</p>
                )}
            </div>
        </div>
    );
}


// --- NUEVO COMPONENTE INTERNO PARA CADA TARJETA ---
function ProspectoCard({ prospecto, onUpdate }) {
    // Estado interno para manejar los campos del formulario de esta tarjeta específica
    const [status, setStatus] = useState(prospecto.status);
    const [notes, setNotes] = useState(prospecto.notes);

    const handleSave = () => {
        onUpdate(prospecto._id, { status, notes });
    };

    return (
        <div className="prospecto-card">
            <h3>{prospecto.name}</h3>
            <p><strong>Email:</strong> {prospecto.email}</p>
            <p><strong>Teléfono:</strong> {prospecto.phone || 'No proporcionado'}</p>
            
            <div className="prospecto-actions">
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="Nuevo">Nuevo</option>
                    <option value="Contactado">Contactado</option>
                    <option value="Interesado">Interesado</option>
                    <option value="No Interesado">No Interesado</option>
                </select>
                <textarea 
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Añadir notas..."
                />
                <button onClick={handleSave}>Guardar</button>
            </div>

            <p className="date">Registrado: {new Date(prospecto.createdAt).toLocaleDateString()}</p>
        </div>
    );
}

export default DashboardPage;