import React from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import userService from "../services/userServices";

function FacultyDetail() {
  const { id } = useParams();
  const [faculty, setFaculty] = React.useState({});
  React.useEffect(() => {
    async function fetchFaculty() {
      const data = await userService.getUserById(id);
      console.log('Faculty information: ', data);
      setFaculty(data);
    }
    fetchFaculty();
  }, []);

  return (
    <Box>
      <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>
        Faculty Detail{" "}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", ml: 24 }}>
      <Box
        sx={{
          lineHeight: 0,
          overflow: "hidden",
          borderRadius: 3,
          height: 200, // Fixed height for the image
          mb: 2,
        }}
      >
        <img
          src="https://img.freepik.com/free-vector/group-people-illustration-set_52683-33806.jpg?size=626&ext=jpg&ga=GA1.1.1788614524.1703203200&semt=ais"
          width={300}
          height={300}
          alt={"Faculty"}
        />
      </Box>
      <Box>
        <Typography sx={{ mb: 1, ml: 12 }}>
          <strong>First Name:</strong> {faculty.firstName}
        </Typography>
        <Typography sx={{ mb: 1, ml: 12 }}>
          <strong>Last Name:</strong> {faculty.lastName}
        </Typography>
        <Typography sx={{ mb: 1, ml: 12 }}>
          <strong>Major:</strong> {faculty.major?.name}
        </Typography>
        <Typography sx={{ mb: 1, ml: 12 }}>
          <strong>Email: </strong>
          {faculty.email}
        </Typography>
        <Typography sx={{ mb: 1, ml: 12 }}>
          <strong>Phone: </strong>
          {faculty.phone}
        </Typography>
        <Typography sx={{ mb: 1, ml: 12 }}>
          <strong>Address: </strong>
          {faculty.address}
        </Typography>
      </Box>
    </Box>
    </Box>
  );
}

export default FacultyDetail;
