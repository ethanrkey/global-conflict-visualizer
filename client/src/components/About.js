import React from 'react';
import { Typography, Container } from '@mui/material';

const About = () => {
  return (
    <Container className="about-section">
      <Typography variant="h4" gutterBottom>
        About the Global Conflict Visualization Tool
      </Typography>
      <Typography variant="body1">
        This tool provides an interactive map of global conflicts from different regions of the world. 
        You can filter conflicts by type, year, and region, making it easier to understand the historical and geopolitical landscape. 
        Scroll down to explore conflict zones and access data sources used for this tool.
      </Typography>
    </Container>
  );
};

export default About;
