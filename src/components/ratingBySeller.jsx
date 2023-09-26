
import { Card, CardContent, CardMedia, Typography, CardActions, Button, Avatar } from '@mui/material/';



export default function ratingByseller({ imageSrc, avatarSrc, title, location, description ,Rating}) {
  return (
    <Card sx={{ minWidth: 400 ,maxWidth:500}}>
      <CardMedia sx={{ height: 140 }} image={imageSrc} />

      <Avatar src={avatarSrc} style={{ margin: "20px" }} />


      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography>{location}</Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <Typography style={{
        padding:"10px"
      }}>Your rating: {Rating}</Typography>

     
    </Card>
  );
  }
