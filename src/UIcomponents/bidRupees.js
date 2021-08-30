import React from "react"
import "../StyledComponents/index.css"
import{Button} from '@material-ui/core';
import {useState} from "react"
import {useHistory,useLocation} from "react-router-dom"
import JourneyDetails from "./journeyDetails";
import Rupee from "./rupee.png"
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
export default function BidRs(){
    const[money,setMoney]=useState(null)
    const history=useHistory()
    const location=useLocation()
const {state}=location
const values= state
const data={...values.state,Money:money}
console.log(values.state)
const handleChange=(e)=>{
       setMoney(e.target.value)
 }
 const bidPage=()=>{
         history.push("/bidPricePage",{state:data})
 }
 return(
    <div className="main">
            <div className="enterDetails ">
            <JourneyDetails values={state}/>
           <div className="setPrice">
           {/* <img src={Rupee} height="30px" width="30px" alt="IND"/> */}
            <input type="number" placeholder='&#8377;0 Rs' autoFocus  className="enterPrice"  onChange={handleChange} value={money}/>
            </div>
            <Button onClick={bidPage} disabled={money<=0?true:false} variant="contained" color="primary" style={{color:money<=0?"blue":"",backgroundColor:"bluevoilet"}} >Next</Button>
            </div>
            </div>
 )
}