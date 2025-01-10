import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function ContactSuccess() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pt: 8,
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            textAlign: 'center',
            p: 4,
          }}
        >
          <CheckCircleOutlineIcon
            sx={{ fontSize: 80, color: 'success.main', mb: 2 }}
          />
          <Typography variant="h4" gutterBottom>
            Message Sent Successfully!
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Thank you for reaching out. I'll get back to you as soon as possible.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/')}
            sx={{ mt: 2 }}
          >
            Return Home
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default ContactSuccess;