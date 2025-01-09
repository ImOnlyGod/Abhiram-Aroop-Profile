import React from 'react';
import { Box, Typography, Container } from '@mui/material';

function About() {
  return (
    <Box component="section" py={8}>
      <Container>
        <Typography variant="h2" mb={4}>About Me</Typography>
        <Typography variant="body1">
          This is where you can write about yourself, your skills, and your experience.
        </Typography>
      </Container>
    </Box>
  );
}

export default About; 