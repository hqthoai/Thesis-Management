// IMPORTS
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import React, { useState } from "react";

// STYLES
const styles = {
  details: {
    padding: "1rem",
    borderTop: "1px solid #e1e1e1"
  },
  value: {
    padding: "1rem 2rem",
    borderTop: "1px solid #e1e1e1",
    color: "#899499"
  }
};

//APP
export default function ProfileCard() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('account')) || {});


  const handleUploadImage =() =>{

  }
  return (
    <Card variant="outlined">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        {/* CARD HEADER START */}
        <Grid item sx={{ p: "1.5rem 0rem", textAlign: "center" }}>
          {/* PROFILE PHOTO */}
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            
          >
            <Avatar
              sx={{ width: 100, height: 100, mb: 1.5 }}
              src={'https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067_1280.png'}
            ></Avatar>
          </Badge>

          {/* DESCRIPTION */}
          <Typography variant="h6">
            {user.firstName}&nbsp;{user.lastName}
          </Typography>
          {/* <Typography color="text.secondary">{user.title}</Typography> */}
        </Grid>
        {/* CARD HEADER END */}

        {/* DETAILS */}
        {/* <Grid container> */}
          {/* <Grid item xs={6}>
            <Typography style={styles.details}>Detail 1</Typography>
            <Typography style={styles.details}>Detail 2</Typography>
            <Typography style={styles.details}>Detail 3</Typography>
          </Grid> */}

          {/* VALUES */}
          {/* <Grid item xs={6} sx={{ textAlign: "end" }}>
            <Typography style={styles.value}>{user.dt1}</Typography>
            <Typography style={styles.value}>{user.dt2}</Typography>
            <Typography style={styles.value}>{user.dt3}</Typography>
          </Grid> */}
        {/* </Grid> */}

        {/* BUTTON */}
        
      </Grid>
    </Card>
  );
}
