import React from 'react';
import { Typography, Container, List, ListItem } from '@mui/material';

const Sources = () => {
  return (
    <Container className="sources-section">
      <Typography variant="h4" gutterBottom>
        Data Sources
      </Typography>
      <List>
        <ListItem>Source 1: Data from XYZ Organization</ListItem>
        <ListItem>Source 2: Conflict data from ABC Foundation</ListItem>
        {/* Add more sources as needed */}
      </List>
    </Container>
  );
};

export default Sources;
