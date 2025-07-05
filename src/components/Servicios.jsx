// src/components/Servicios.jsx

import React from 'react';
import TarjetaDeServicio from './TarjetaDeServicio';
import { Container, Typography, Grid } from '@mui/material';
import './Servicios.css'; 

function Servicios() {
  return (
    <Container maxWidth="lg" component="section" sx={{ py: 8 }}>
      <Typography variant="h3" align="center" gutterBottom color="text.primary">
        Nuestros Servicios
      </Typography>
      
      {/* El padre debe tener la prop 'container' */}
      <Grid container spacing={4} >

        {/* Cada hijo directo debe ser un 'Grid' con la prop 'item' */}
        {/* Y las props de tamaño (xs, md) usan llaves {} porque son números */}
        <Grid item xs={12} md={4} alignItems={'center'} justifyContent={'center'}>
          <TarjetaDeServicio 
            icon="fas fa-piggy-bank" 
            title="Cuentas de Ahorro"
            text="Planes de ahorro flexibles con tasas de interés competitivas para ayudarte a alcanzar tus metas." 
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <TarjetaDeServicio 
            icon="fas fa-chart-line" 
            title="Créditos de Libranza"
            text="Obtén créditos de libranza con tasas preferenciales y plazos cómodos, ideales para empleados públicos." 
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <TarjetaDeServicio 
            icon="fas fa-hand-holding-usd" 
            title="Créditos Personales"
            text="Accede a créditos con tasas preferenciales y plazos cómodos para tus proyectos personales." 
          />
        </Grid>
        
      </Grid>
    </Container>
  );
}

export default Servicios;