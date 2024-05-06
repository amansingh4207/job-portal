import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const JobCard = ({ job }) => {
  const { title, company, location, description, experience, applyLink } = job;

  return (
    <Card variant="outlined" style={{ marginBottom: '20px' }} >
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          {title}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {company} - {location}
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          {description}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          Experience Required: {experience}
        </Typography>
        <Button variant="contained" color="primary" href={applyLink} target="_blank" rel="noopener noreferrer">
          Apply
        </Button>
      </CardContent>
    </Card>
  );
};

export default JobCard;
