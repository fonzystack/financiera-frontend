// src/components/Hero.jsx

import React from 'react';
// Importamos los componentes que usaremos de la librería MUI
import { Box, Container, Typography, Button } from '@mui/material';

function Hero() {
  return (
    // Usamos Box como nuestro contenedor principal para darle un color de fondo.
    // La prop 'sx' nos permite añadir estilos rápidos. 'py' significa padding en el eje Y (arriba y abajo).
    <Box sx={{ backgroundColor: '#f4f7f6', py: 8 }}>
      
      {/* Container es un componente que centra nuestro contenido y le da un ancho máximo. */}
      <Container maxWidth="md">

        {/* Usamos Typography para todo el texto, asegurando consistencia. */}
        <Typography 
          component="h2"    // Le decimos que semánticamente es un h2
          variant="h3"      // Pero que visualmente use el estilo de un h3 del tema (más grande)
          align="center"    // Alineación del texto
          color="text.primary" // Usa el color de texto primario del tema
          gutterBottom      // Añade un margen inferior estándar
        >
          La solución financiera que se adapta a ti
        </Typography>

        <Typography 
          variant="h6"      // Estilo de un subtítulo
          align="center"
          color="text.secondary" // Un color de texto más suave para el subtítulo
          paragraph         // Lo renderiza como una etiqueta <p> y añade margen inferior
        >
          Planes de ahorro, inversión y crédito diseñados para alcanzar tus metas. Simple, transparente y seguro.
        </Typography>
        
        {/* Usamos otro Box para centrar nuestro botón */}
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          {/* El botón principal, con el estilo 'contained' (sólido) y tamaño grande. */}
          <Button variant="contained" size="large" href='/#contacto'>
            Comienza Ahora
          </Button>
        </Box>

      </Container>
    </Box>
  );
}

export default Hero;