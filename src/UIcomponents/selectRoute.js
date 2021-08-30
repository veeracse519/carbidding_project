import React from "react"
import { TextField,Select,InputLabel,Button,FormControl} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles"
import "../StyledComponents/index.css"
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "./header";
// import { SettingsRemoteRounded } from "@material-ui/icons";
// export default sendData
export default function Home(){
    const[state,setDetails]=useState({source:"",dest:"",car:"",members:""})
    const[errorStatus,setError]=useState(false)
    const history=useHistory()
    const cityData=["hyderabad","mumbai","chennai","kerala","banguluru"]
    // const [requireFeild,setValue]=useState({source:false,dest:false,car:false,members:false})
    const submitDetails=()=>{
        const values=state
        // let mem=int(values.members)
        if(values.dest.toLowerCase()!==values.source.toLowerCase() && cityData.indexOf((values.source).toLowerCase())!==-1 &&  cityData.indexOf((values.dest).toLowerCase())!==-1 && values.car.length!==0 && values.members>0){
            if((values.car==="Suv" && values.members<=6)||(values.car!=="SUV" && values.members<=5)){
                // console.log(history)
                console.log("veera")
                 history.push("/bid-contract",{state:values})
                 return
            }
            setError(true)
            return
        }
        setError(true)
        // if((values.source).length===0){
        //    setValue({...requireFeild, source:true})
        // }
        // if((values.dest).length===0){
        //     setValue({...requireFeild, dest:true})
        // }
        // if((values.car).length===0){
        //     setValue({...requireFeild, car:true})
        // }
        // if((values.members).length===0){
        //     setValue({...requireFeild, members:true})
        // }
        // else{
        //     alert("Sucess")
        // }
    }
    const handleChange=(e)=>{
        let value=e.target.id.split(" ")
        let caseValue=value[1]
        switch(caseValue){
            case "source":
                setDetails({...state, source:e.target.value})
                break;
            case "dest":
                setDetails({...state, dest:e.target.value})
                break;
            case "cartype":
                setDetails({...state, car:e.target.value})
                
                break;
            case "mem":
                setDetails({...state, members:e.target.value})
                break;
            default:
                break;
        }
        // console.log(state)
        
    }
    return(
    <div className="main">
           {/* <div className="enterDetails"> */}
              
               <div className="enterDetails" >
                    <Header/>
        <div className="source-dest">
        {/* <div className="requireDiv"> */}
        <TextField id="outlined-basic source" label="Source" className="mobileScreen" size="small" error={errorStatus && (cityData.indexOf((state.source).toLowerCase())===-1 || state.dest.toLowerCase()===state.source.toLowerCase())} required={true} variant="outlined" value={state.source}  onChange={handleChange}/>
        {/* <span style={{color:"red",fontSize:10}}>{requireFeild.source?"Required":""}</span> */}
        {/* </div> */}
        {/* <div className="requireDiv"> */}
        <TextField id="outlined-basic dest" label="Destination" className="mobileScreen" error={errorStatus && (cityData.indexOf((state.dest).toLowerCase())===-1 || state.dest.toLowerCase()===state.source.toLowerCase())} required={true} size="small" variant="outlined" onChange={handleChange} value={state.dest}/>
        {/* <span style={{color:"red",fontSize:10}}>{requireFeild.dest?"Required":""}</span> */}
        {/* </div> */}
        </div>
        {/* <div className="requireDiv"> */}
        <FormControl variant="outlined" size="small" style={{marginBottom: 20}} error={errorStatus && state.car.length===0} required={true} >
        <InputLabel htmlFor="outlined-age-native-simple " >Enter car type</InputLabel>
        <Select
          native
          value={state.car}
          onChange={handleChange}
          label="Enter car type"
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple cartype',
          }}
        >
            <option value=""/>
          <option value="HatchBack">HatchBack</option>
          <option value="Sedan">Sedan</option>
          <option value="Suv">Suv</option>
        </Select>
      </FormControl>
      {/* <span style={{color:"red",fontSize:10}}>{requireFeild.car?"Required":""}</span> */}
      {/* </div> */}
      {/* <div className="requireDiv"> */}
      <TextField id="outlined-basic mem" type="number" style={{marginBottom: 20}} required={true} label="Members" variant="outlined"
      size="small"
      error={errorStatus && ((state.members.length===0  || state.members<=0)||(state.car!=="Suv" && state.members>5) ||(state.car==="Suv" && state.members>6))}
       value={state.members} onChange={handleChange}/>
      {/* <span style={{color:"red",fontSize:10}}>{requireFeild.members?"Required":""}</span> */}
      {/* </div> */}
        <Button variant="contained" color="primary" style={{backgroundColor:"bluevoilet"}} onClick={submitDetails}>Enter Bid Details</Button>
        {/* </div> */}
    </div>
    </div>
 )
}