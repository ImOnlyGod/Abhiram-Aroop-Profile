import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';

function Projects() {
  return (
    <Box component="section" py={8}>
      <Container>
        <Typography variant="h2" mb={4}>My Projects</Typography>
        <Grid container spacing={3}>
          {/* Add your project cards here */}
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5">Project 1</Typography>
                <Typography variant="body2">Project description goes here</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Projects; 