import { Card, CardContent, CardMedia, Typography, CardActions, Button, Avatar } from '@mui/material/';
import PropTypes from 'prop-types'; // Import PropTypes for prop type validation
import React from 'react';

export default function ProfileCard({  avatarSrc, username, location, description,priceOfItems,contactInfo,availability }) {
  return (
    <Card sx={{ maxWidth: 400 ,minWidth:300,padding:2}} >
      {/* <CardMedia
        sx={{ height: 140 }}
        image={imageSrc}
      /> */}
      <Avatar src={avatarSrc} style={{ margin: "20px", width: "100px", height: "100px" }} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {username}
        </Typography>
        <Typography>{location}</Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {priceOfItems}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {contactInfo}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {availability}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Send request</Button>
      </CardActions>
    </Card>
  );
}

// // Define PropTypes for type checking
// ProfileCard.propTypes = {
//   imageSrc: PropTypes.string.isRequired,
//   avatarSrc: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
// };
