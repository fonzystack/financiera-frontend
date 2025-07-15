// src/components/TarjetaDeServicio.jsx
import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

function TarjetaDeServicio({ image, title, text }) {
  return (
    // 1. Añadimos minWidth: 0. Es un truco de Flexbox que permite
    //    a la tarjeta encogerse incluso si su contenido es muy ancho.
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', maxWidth:350 }}>
      <CardMedia
        component="img"
        height="160"
        image={image}
        alt={title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
          {title}
        </Typography>
        
        {/* 2. Añadimos un control de desbordamiento al texto */}
        <Typography 
          variant="body2" 
          color="text.secondary"
          sx={{
              whiteSpace: 'normal',       // Asegura el ajuste de línea
              overflow: 'hidden',         // Oculta cualquier texto que se desborde
              textOverflow: 'ellipsis', // Pone '...' si el texto es muy largo
          }}
        >
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default TarjetaDeServicio;