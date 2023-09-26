import { Card, CardContent, CardMedia, Typography, CardActions, Button, Avatar } from '@mui/material/';
import ProfileCardVendor from './ProfileCardVendor';

export default function ProfileCard({ imageSrc, avatarSrc, title, location, description }) {
  return (
    <Card sx={{ minWidth: 400 }}>
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

      <CardActions>
      
        <Button size="small">Approve request</Button>
      </CardActions>
    </Card>
  );
}
