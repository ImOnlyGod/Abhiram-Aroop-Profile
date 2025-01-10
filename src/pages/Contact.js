import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Paper,
  Grid,
  CircularProgress,
} from '@mui/material';

function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // ... keep existing handleChange and validation functions ...

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // ... keep existing validation ...

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    try {
      // Replace these with your EmailJS credentials
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone_number: formData.phone,
        message: formData.message,
      };

      await emailjs.send(
        'YOUR_SERVICE_ID',  // Get from EmailJS dashboard
        'YOUR_TEMPLATE_ID', // Get from EmailJS dashboard
        templateParams,
        'YOUR_PUBLIC_KEY'   // Get from EmailJS dashboard
      );

      // Redirect to success page
      navigate('/contact/success');
      
    } catch (error) {
      console.error('Email sending failed:', error);
      setErrors({ submit: 'Failed to send message. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      component="section"
      sx={{
        minHeight: '100vh',
        pt: 10,
        pb: 5,
      }}
    >
      <Container maxWidth="md">
        {/* ... keep existing JSX ... */}
        
        <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
          <form onSubmit={handleSubmit}>
            {/* ... keep existing form fields ... */}

            {errors.submit && (
              <Grid item xs={12}>
                <Typography color="error" align="center">
                  {errors.submit}
                </Typography>
              </Grid>
            )}

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                disabled={isLoading}
              >
                {isLoading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  'Send Message'
                )}
              </Button>
            </Grid>
          </form>
        </Paper>
      </Container>
    </Box>
  );
}

export default Contact;