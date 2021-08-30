import React from "react"
import EditIcon from '@material-ui/icons/Edit';
import { useLocation } from "react-router-dom"
import JourneyDetails from "./journeyDetails"
import{Button,Link} from '@material-ui/core';
import "../StyledComponents/index.css"
import BidDetails from "./biDetails"
import OtpInput from 'react-otp-input';
import{useState} from "react"
import {useHistory} from "react-router-dom"
import Header from "./header";
// import {useState} from "react"
export default function BidRate(){
    const[OTP,setOTP]=useState('')
    const[InvalidOtp,setInvalidStatus]=useState(false)
    const location =useLocation()
    const {state}=location
    const history=useHistory()
    const values=state.state
    console.log(values,OTP)
   const[otp,setOtp]=useState('')
    const handleChange=async (e)=>{
        await setInvalidStatus(false)
        await setOtp(e)
    }
    const resendOTP=async ()=>{
        await setInvalidStatus(false)
          let otpStr=Math.floor(1000+Math.random()*9000).toString()
          await setOTP(otpStr)
          await alert(otpStr)
    }
    const Sucess=async ()=>{
        if(otp===values.OTP || otp===OTP)
        {
        await setOtp('')
        await history.push("/finalPrice",{state:values})
        return
        }
        await setOtp('')
        await setInvalidStatus(true)
        
    }
    const editDetails=()=>{
        // console.log(values.state)
        history.push('/bidPricePage',{state:values.state})
    }
    return(<div className="main">
        
    <div className="enterDetails resize">
        <JourneyDetails values={values}/>
        <BidDetails values={values}/>
        <p style={{alignSelf:"flex-start"}}>We have sent OTP to your mobile number.PLease enter it <br/> below to submit yor bid <b> {values.phone}</b>
        <div onClick={editDetails}  style={{display:"inline-flex",alignItems:"center",marginLeft:5, color:"blue",cursor:"pointer"}}><EditIcon  style={{fontSize:18,cursor:"pointer"}}/> Edit</div>
        </p>
        <div style={{width:"100%",marginBottom:20}}>
        <OtpInput
        value={otp}
        onChange={handleChange}
        containerStyle={{height:"50px"}}
        inputStyle={{height:40,width:40,border:"none",marginRight:10,borderBottom:"2px solid gray",fontSize:18,fontWeight:"bold"}}
        shouldAutoFocus={!InvalidOtp && true}
        
        numInputs={4}
        // separator={<span>{ }</span>}
      />
        </div>
        {InvalidOtp?<p style={{alignSelf:"flex-start",marginTop:0,color:"red"}}>Invalid OTP</p>:""}
        <Link
  component="button"
  variant="body2"
  style={{marginBottom:20}}
  onClick={resendOTP}
>
 Resend OTP
</Link>
        {otp.length===4?Sucess():""}
        <Button variant="contained" color="primary" style={{backgroundColor:"bluevoilet"}} onClick={Sucess} >Enter bid details</Button>
       
    </div>
    </div>)
}