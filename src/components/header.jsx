// src/components/Header.jsx

import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  return (
    // AppBar es el contenedor principal de la barra de navegación de MUI.
    <AppBar position="static">
      {/* Toolbar ayuda a organizar los elementos horizontalmente con un padding estándar. */}
      <Toolbar>
        {/* Typography es para renderizar texto. 'variant="h6"' le da el estilo de un título. */}
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Adelante
          </Link>
        </Typography>

        {/* Box es un contenedor genérico. Lo usamos aquí para agrupar los botones. */}
        <Box border>
          {/* Usamos el componente Button de MUI. 'color="inherit"' hace que sea blanco. */}
          <Button color="inherit" component={Link} to="/">Inicio</Button>
          <Button color="inherit">Servicios</Button>
          <Button color="inherit">Contacto</Button>
          {/* 'variant="contained"' le da un fondo. 'component={Link}' lo hace comportarse como un Link de React Router. */}
          <Button variant="contained" color="secondary" component={Link} to="/login">
            Login Asesor
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;