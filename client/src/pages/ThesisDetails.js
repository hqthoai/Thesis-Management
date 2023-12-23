import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import thesisService from "../services/thesisService";

function ThesisDetail() {
  const { id } = useParams();
  const [thesis, setThesis] = React.useState({});

  React.useEffect(() => {
    async function fetchThesis() {
      const data = await thesisService.getThesisById(id);
      setThesis(data);
    }
    fetchThesis();
    console.log(thesis);
  }, []);

  return (
    <Box>
      <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>
        Thesis Detail{" "}
      </Typography>

      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            lineHeight: 0,
            overflow: "hidden",
            borderRadius: 3,
            height: 200,
            mb: 2,
            ml: 12,
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/6176/6176805.png"
            width={200}
            height={200}
            alt={"FIT"}
          />
        </Box>
        <Box sx={{ mt: 4, ml: 4 }}>
          <Typography sx={{ fontWeight: "bold", mb: 1 }}>
            Topic: {thesis.title}
          </Typography>
          <Typography sx={{ mb: 1 }}>
            <strong>Authors: </strong>
            {thesis.authors?.length > 0 &&
              thesis.authors.map(
                (author) => author.firstName + ", " + author.lastName
              )}
          </Typography>
          <Typography sx={{ mb: 1 }}>
            <strong>Adviser: </strong>

            {thesis.adviser &&
              thesis.adviser.firstName + " " + thesis.adviser.lastName}
          </Typography>
          <Typography sx={{ mb: 1 }}>
            <strong>Major: </strong>
            {thesis.major?.name}
          </Typography>
          <Typography sx={{ mb: 1 }}>
            <strong>Description: </strong>
            {thesis.description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default ThesisDetail;
