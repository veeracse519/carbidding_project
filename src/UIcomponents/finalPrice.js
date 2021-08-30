import React from "react"
import BidDetails from "./biDetails"
import "../StyledComponents/index.css"
import JourneyDetails from "./journeyDetails"
import {useLocation} from "react-router-dom"
import{Button} from '@material-ui/core';
export default function FinalPrice(){
    const location=useLocation()
    const journeyDetails=location.state.state
    const bidDetails=location.state.state
    console.log(journeyDetails)
return(<div className="main">
<div className="enterDetails ">
    <JourneyDetails values={journeyDetails}/>
    <BidDetails values={bidDetails} price="FixedPrice"/>
    <Button variant="contained" color="primary" style={{backgroundColor:"bluevoilet",marginTop:20}} >Enter bid details</Button>
</div>
</div>)
}