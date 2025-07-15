// src/components/Servicios.jsx
import React from 'react';
import TarjetaDeServicio from './TarjetaDeServicio';
import { Container, Typography, Grid, Box } from '@mui/material';

function Servicios() {
  return (
    // Box para el color de fondo de toda la sección
    <Box component="section" sx={{ width: '100%', py: 8, backgroundColor: '#FFFBEF' }}>
      {/* Container para centrar y limitar el ancho del contenido */}
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 5 }}>
          NUESTROS SERVICIOS:
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {/* Cada Grid item es una columna responsiva */}
          <Grid item xs={12} sm={6} md={4}>
            <TarjetaDeServicio
              image="/images/Servicio1.png" // Asegúrate que esta ruta sea correcta
              title="Credito de libranza"
              text="Accede a créditos de libranza con tasas competitivas y condiciones flexibles. Ideal para empleados y pensionados."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TarjetaDeServicio
              image="/images/Servicio2.png" // Asegúrate que esta ruta sea correcta
              title="Credito de consumo"
              text="Obtén tu crédito de consumo de manera rápida y sencilla. Sin complicaciones y con tasas ajustadas a tu perfil."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TarjetaDeServicio
              image="/images/Servicio3.png" // Asegúrate que esta ruta sea correcta
              title="Negociacion de deudas"
              text="Recibe asesoría para la negociación de tus deudas. Te ayudamos a encontrar la mejor solución para tu situación financiera."
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Servicios;