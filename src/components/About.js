import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  Chip,
} from '@mui/material';

function About() {
  const skills = [
    'JavaScript',
    'React',
    'Node.js',
    'Python',
    'HTML/CSS',
    'Git',
    // Add your skills here
  ];

  return (
    <Box
      component="section"
      sx={{
        minHeight: '100vh',
        pt: 10, // Add padding top to account for navbar
        pb: 5,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" gutterBottom>
          About Me
        </Typography>
        
        <Grid container spacing={4}>
          {/* Bio Section */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                Who I Am
              </Typography>
              <Typography paragraph>
                I'm a passionate software developer with a focus on creating elegant,
                efficient solutions to complex problems. With [X] years of experience
                in web development, I enjoy building applications that make a difference.
              </Typography>
              <Typography paragraph>
                When I'm not coding, you can find me [Your Interests/Hobbies].
              </Typography>
            </Paper>
          </Grid>

          {/* Skills Section */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                Skills & Technologies
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                {skills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    color="primary"
                    variant="outlined"
                  />
                ))}
              </Box>
            </Paper>
          </Grid>

          {/* Experience Section */}
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                Experience
              </Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary="Senior Developer - Company Name"
                    secondary={
                      <>
                        <Typography component="span" color="textSecondary">
                          2020 - Present
                        </Typography>
                        <br />
                        • Led development of key features for main product
                        <br />
                        • Mentored junior developers
                      </>
                    }
                  />
                </ListItem>
                {/* Add more experience items as needed */}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default About; 