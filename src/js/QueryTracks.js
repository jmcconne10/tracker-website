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
    apiGet();
  },[])

  const apiGet = () => {
    fetch("https://20gefk5dd7.execute-api.us-east-1.amazonaws.com/dev/query/", {
      method: "GET",
      mode: "cors",
      })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setUsers(json);
      });
  };

  const apiCall = (activity,name) => {
    fetch("https://20gefk5dd7.execute-api.us-east-1.amazonaws.com/dev/post?name=" + name + "&activity=" + activity, {
        "method": "GET",
        })
        .then(response => response.json())
        .then(response => { console.log(response);
        })
        .catch(err => { console.log(err); });
  }
  

  return (
    <div>
      {users.map(item=>(

                    <div>
                        {item.activity}
                    </div>
      ))}

    </div>
  );
}
