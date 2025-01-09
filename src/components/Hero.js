import React from 'react';
import { Box, Typography, Container } from '@mui/material';

function Hero() {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container>
        <Typography variant="h1">Welcome to My Portfolio</Typography>
        <Typography variant="h2">I'm a Full Stack Developer</Typography>
      </Container>
    </Box>
  );
}

export default Hero; 