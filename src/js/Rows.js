import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';


export default function Rows() {
  const [users , setUsers] = useState([]);
  const [activityVar, setActivityVar] = useState('');
  
  useEffect(()=>{
    apiGet();
  },[])

  const apiGet = () => {
    fetch("https://20gefk5dd7.execute-api.us-east-1.amazonaws.com/dev/buttons/", {
      method: "GET",
      mode: "cors",
      })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setUsers(json);
      });
  };  

  return (

    <div>
      {users.map(item=>(
        <Grid container spacing={1}>
          <Grid item>{item.trackName}</Grid>
          <Grid item>{item.activity}</Grid>
        </Grid>  

      ))}
    </div>
  );
}
