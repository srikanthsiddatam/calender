import React, { useState } from "react";
// import Form from "./Form";
import {
  TextField,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  MenuItem,
  Select,
  InputLabel,
  Grid
} from "@mui/material";
import "./App.css"


const defaultValues = {
  firstName: '',
  middleName: '',
  lastName: '',
  gender: '',
  dateOfBirth: '',
  maritalStatus: ''
};

function App() {
  
  const [state, setState] = useState(defaultValues);

  const [showpopup,setshowpopup] = useState(false)
  const [form,setform]=useState(true)
  // const [error,seterror] = useState({})
  
//  if(state.firstName===""){
// errors.firstName="enter the firstName"
//  }
  const handleReset = () => {
    setState(defaultValues)
  };
  const handleSubmit = (event) => {
    // Handle form submission
    // event.preventDefault()
    // alert("Submitted:",state
    // );
    // setState(defaultValues)
    // const errors={}
    // setState(defaultValues)
    event.preventDefault()
    setshowpopup(true)
    setform(false)
   
  }
  const popcancel = (e) => {
    e.preventDefault()
    setshowpopup(false)
    setform(true)
    

  }
  
  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });

  }

  return (
    <>
     <div className="main">
      {form &&  <div className="sub">
      <form>
        
            <TextField style={{marginTop:"20px"}}
            
              label="First Name"
              value={state.firstName}
              onChange={handleChange}
              
              name="firstName"

            /><br></br>
            {/* <p id="firstname"></p> */}

          
            <TextField
            style={{marginTop:"20px"}}
              label="MiddleName"
              value={state.middleName}
              onChange={handleChange}
              
              name="middleName"
            />
          <br></br>
          
            <TextField
            style={{marginTop:"20px"}}
              label="Last Name"
              value={state.lastName}
              onChange={handleChange}
              name="lastName"
            //   fullWidth
              
            /><br></br>
          
          
            <FormControl component="fieldset"style={{marginTop:"20px"}}>
              <FormLabel component="legend" style={{marginTop:"20px"}}>Gender</FormLabel>
              <RadioGroup
                value={state.gender}
                onChange={handleChange}
                row
                name="gender"
              >
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
              </RadioGroup>
            </FormControl><br></br>
          
          
            <TextField
              // label="Date Of Birth"
              value={state.dateOfBirth}
              onChange={handleChange}
            //   fullWidth
              name="dateOfBirth"
              type="date"
            /><br></br>
          
          
            <FormControl fullWidth style={{marginTop:"20px"}}>
              <InputLabel variant="standard">Marital Status</InputLabel>
              <Select
                value={state.maritalStatus}
                onChange={handleChange}
                
                name="maritalStatus"
                style={{width:'180px'}}
              >
                <MenuItem value="single">Single</MenuItem>
                <MenuItem value="married">Married</MenuItem>
                <MenuItem value="divorced">Divorced</MenuItem>
                <MenuItem value="widowed">Widowed</MenuItem>
              </Select>
            </FormControl>
          
          
            <Button variant="outlined" color="secondary" onClick={handleReset} style={{marginTop:"20px"}}>
              Reset
            </Button>
          
          
            <Button variant="contained" color="primary" onClick={handleSubmit} style={{marginTop:"20px"}}>
              Submit
            </Button>

            
          

        
      </form>
      </div>}
      
      {/* </div> */}
<div className="mainpopup">
      
      {showpopup && (
      <div className="popup">
          <div className="popup-content">
            <p>First Name: {state.firstName}</p>
            <p>Last Name: {state.middleName}</p>
            <p>Email: {state.lastName}</p>
            <p>Gender: {state.gender}</p>
            <p>DateofBirth: {state.dateOfBirth}</p>
            <p>: maritalStatus:{state.maritalStatus}</p>
            <button  onClick={popcancel}>Close</button>
            {/* <button onClick={()=>{setform(true) */}

            {/* }}> Back To Form</button> */}
          </div>
        </div>
      )}

      </div>
      </div>
      

      
      


      
    </>
  );
}

export default App;


