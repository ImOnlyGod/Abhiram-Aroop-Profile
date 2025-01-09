import React from 'react';
import { Box, Typography, Container, TextField, Button } from '@mui/material';

function Contact() {
  return (
    <Box component="section" py={8}>
      <Container>
        <Typography variant="h2" mb={4}>Contact Me</Typography>
        <Box component="form" noValidate autoComplete="off">
          <TextField
            fullWidth
            label="Name"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Email"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Message"
            multiline
            rows={4}
            margin="normal"
          />
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Send Message
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Contact; 