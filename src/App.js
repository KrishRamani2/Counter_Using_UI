import React, { useState } from "react";
import './App.css'
import { Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
const App =()=>{
  const [count,setCount] = useState(0);
  const Inc=()=>{
    setCount(count+1);
  };
  const Dec =()=>{
    count>0?setCount(count-1):alert("Can't Decrease below Zero");
  };
  return (
    <>
    <div className="outer col-sm-12 col-md-8 col-lg-4">
      <div className="inner col-sm-12 col-md-8 col-lg-4">
        <h1>{count}</h1>
        <div className="btn_div col-sm-12 col-md-8 col-lg-4">
        <Button className="increase btn_green" onClick={Inc}><><Tooltip title="Add"><AddIcon /></Tooltip></></Button>
        <Button className="decrease btn_red col-sm-12 col-md-8 col-lg-4" onClick={Dec}><><Tooltip title="Delete">
        <DeleteIcon />
    </Tooltip></> 
</Button>
        </div>
      </div>
    </div>
    </>
  );
}
export default App;