// src/components/Footer.jsx

import React from 'react';
import { Box, Container, Typography, Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    // Usamos Box con component="footer" para mantener la semántica HTML.
    <Box 
      component="footer" 
      sx={{ 
        py: 4, // Padding vertical
        px: 2, // Padding horizontal
        mt: 'auto', // Esto empuja el footer al final de la página
        backgroundColor: '#2c3e50', // Un color oscuro para el footer
        color: 'white'
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1" align="center" gutterBottom>
          Soma App - Soluciones a tu medida.
        </Typography>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
          {/* Usamos el componente Link de MUI, pero le decimos que se comporte como un Link de React Router */}
          <MuiLink component={RouterLink} to="/" color="inherit" sx={{ mx: 1 }}>
            Inicio
          </MuiLink>
          <MuiLink href="#" color="inherit" sx={{ mx: 1 }}>
            Términos y Condiciones
          </MuiLink>
          <MuiLink href="#" color="inherit" sx={{ mx: 1 }}>
            Política de Privacidad
          </MuiLink>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <MuiLink href="https://github.com/fonzystack" target="_blank" color="inherit" sx={{ mx: 1.5 }}>
            <GitHubIcon />
          </MuiLink>
          <MuiLink href="https://www.linkedin.com/in/fonzarely-franco-manrique-395230244" target="_blank" color="inherit" sx={{ mx: 1.5 }}>
            <LinkedInIcon />
          </MuiLink>
        </Box>

        <Typography variant="body2" align="center">
          {'© '}
          {new Date().getFullYear()}
          {' FonzyDev. Todos los derechos reservados.'}
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;