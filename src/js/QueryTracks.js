import React, { useEffect, useState } from "react";
import axios from 'axios';

// @mui material components
import Grid from "@mui/material/Grid";
import MDButton from "components/MDButton";
import MDBox from "components/MDBox";

function QueryTracks() {
  const [users , setUsers] = useState([]);
  useEffect(()=>{
    const fetchData = async() => {
      const response = await axios.get("https://20gefk5dd7.execute-api.us-east-1.amazonaws.com/dev/query");
      setUsers(response.data)
    }
    fetchData();
  },[])

  return (
    <div>
      {users.map(item=>(


        <Grid item xs={12} md={6} lg={3}>
        <MDBox p={2} mt="auto">
        <MDButton
            component="a"
            href="https://www.creative-tim.com/product/material-dashboard-pro-react"
            target="_blank"
            rel="noreferrer"
            variant="gradient"
            color="info"
            fullWidth
        >
            <ul>
            <li>{item.name}</li>
            <li>{item.activity}</li>
            </ul>
        </MDButton>
        </MDBox>
        </Grid>
      ))}
    </div>
  );
}

export default QueryTracks;