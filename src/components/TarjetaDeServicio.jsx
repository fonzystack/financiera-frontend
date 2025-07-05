// src/components/TarjetaDeServicio.jsx

import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const icons = {
    'fas fa-piggy-bank': <AccountBalanceIcon fontSize="large" color="primary" />,
    'fas fa-chart-line': <ShowChartIcon fontSize="large" color="primary" />,
    'fas fa-hand-holding-usd': <AttachMoneyIcon fontSize="large" color="primary" />
};

function TarjetaDeServicio({ icon, title, text }) {
  return (
    // 1. Añadimos display: 'flex' y alignItems para alinear el icono y el texto.
    <Card sx={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', p: 2 }}>
      {/* 2. Un Box para el icono con un padding a la derecha */}
      <Box sx={{ pr: 2 }}>
        {icons[icon]}
      </Box>
      
      {/* 3. El CardContent ahora contiene solo el texto */}
      <CardContent sx={{ textAlign: 'justify', p: '10 !important' }}> {/* 'p: 0 !important' quita el padding extra */}
        <Typography variant="h5" component="h3">
          {title}
        </Typography>
        <Typography color="text.secondary" variant="body2" component="p" sx={{ mt: 1 }}>
          {text}
        </Typography>
      </CardContent>

    </Card>
  );
}

export default TarjetaDeServicio;