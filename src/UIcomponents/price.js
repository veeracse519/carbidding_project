import React from "react"
import JourneyDetails from "./journeyDetails"
import {useLocation,useHistory} from "react-router-dom"
import {useState} from "react"
import Rupee from "./rupee.png"
import { TextField,Select,InputLabel,Button,FormControl} from '@material-ui/core';
// import {useState} from 'react'
export default function Price(){
    const[details,SetValues]=useState({phone:'',name:'',remarks:'',OTP:null})
    const[errorValue,setError]=useState(false)
    const location =useLocation()
    const phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    const namePatt=/^[A-Za-z ]{3,}$/;
    const history=useHistory()
     const values=location.state
     const handleChange=(e)=>{
         setError(false)
          const value=e.target.id.split(" ")
          const data=e.target.value
          const id=value[1]
          switch(id){
              case "phone":
                  SetValues({...details,phone:data})
                  break;
                case "name":
                    SetValues({...details,name:data})
                    break;
                case "remarks":
                    SetValues({...details,remarks:data})
                    break;
                default:
                    break;
          }
     }
     const submitDetails=()=>{
         const data={...values,OTP:Math.floor(1000+Math.random()*9000).toString()}
          const allData= {...details,...data}
          const condition1=allData.phone.match(phoneno)?false:true
          const condition2=allData.name.match(namePatt)?false:true
          if(condition1 || condition2){
            setError(true)
            console.log(condition1,condition2)
            return
          }
          alert(data.OTP)
          history.push("/bidRate",{state:allData})

     }
    return(<div className="main">
    <div className="enterDetails resize" style={{height:600}}>
    <JourneyDetails values={values}/>
    <div className="bid-ruppees">
    <img src={Rupee} height="30px" width="30px" alt="IND"/>
    <p className="price">{values.state.Money}</p>
    </div>
    <span style={{width:"100%",border:"1px solid gray"}}></span>
    <div style={{display:"flex",flexDirection:"column",justifyContent:"space-around",height:"40%",width:"100%"}}>
    <TextField id="outlined-basic phone" size="small" type="number" onChange={handleChange} value={details.phone} error={errorValue && (details.phone.match(phoneno)?false:true)} required={true}  label="Enter 10 digit mobile number" variant="outlined"/>
    <TextField id="outlined-basic name" size="small" onChange={handleChange} value={details.name}  error={errorValue && (details.name.match(namePatt)?false:true)} required={true} label="Enter your name" variant="outlined"/>
    <TextField id="outlined-basic remarks" size="small" onChange={handleChange} value={details.remarks} label="Enter Remarks(optional)" variant="outlined"/>
    <Button variant="contained" color="primary" style={{backgroundColor:"bluevoilet"}} onClick={submitDetails} >Verify via OTP</Button>
    </div>
    </div>
    </div>)
}