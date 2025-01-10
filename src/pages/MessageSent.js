import React from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Paper,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function MessageSent() {
  const navigate = useNavigate();

  return (
    <Box
      component="section"
      sx={{
        minHeight: '100vh',
        pt: 10,
        pb: 5,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
          <CheckCircleOutlineIcon 
            color="success" 
            sx={{ fontSize: 64, mb: 2 }} 
          />
          <Typography variant="h4" gutterBottom>
            Message Sent!
          </Typography>
          <Typography variant="body1" paragraph>
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
        </Paper>
      </Container>
    </Box>
  );
}

export default MessageSent;