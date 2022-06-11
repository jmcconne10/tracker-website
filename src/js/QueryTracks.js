import React, { useEffect, useState } from "react";
import axios from 'axios';

// @mui material components
import Grid from "@mui/material/Grid";
import MDButton from "components/MDButton";
import MDBox from "components/MDBox";

export default function QueryTracks() {
  const [users , setUsers] = useState([]);
  const [activityVar, setActivityVar] = useState('');
  
  useEffect(()=>{
    const fetchData = async() => {
      const response = await axios.get("https://20gefk5dd7.execute-api.us-east-1.amazonaws.com/dev/query");
      setUsers(response.data)
    }
    fetchData();
  },[])

  const apiCall = (incomingVar) => {
    alert(incomingVar);
  }

  return (
    <div>
      {users.map(item=>(


            <MDBox p={2} mt="auto" borderRadius="lg" >
                
                <MDButton
                    /* component="a"
                    href={"http://" & item.name}
                    target="_blank"*/
                    rel="noreferrer"
                    variant="gradient"
                    color="info"
                    size="large"
                    fullWidth 
                    primary onClick={() => apiCall(item.activity)}
                >
                    <div>
                    
                        {item.activity}
                        
                    </div>
                </MDButton>

            </MDBox>
      ))}

    </div>
  );
}
