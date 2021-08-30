import React from "react"
import "../StyledComponents/index.css"
import Rupee from "./rupee.png"
export default function BidDetails({values}){
    return(
        <div style={{width:"100%"}}>
            <div style={{display:"flex",borderBottom:"1px solid gray",alignItems:"center",justifyContent:"space-between",marginTop:30}}>
             <div className="journeyDetails" style={{border:"none",display:"flex",flexDirection:"column"}}>
             <p style={{marginBottom:4,color:"gray"}}>Bid Details</p>
            <strong>{values.phone}</strong>
            <strong>{values.name}</strong>
            <strong>{values.remarks}</strong>
            </div>
            <div style={{disply:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <div className="bid-ruppees" style={{justifyContent:"flex-end"}}>
            <img src={Rupee} width="30px" height="30px" alt="IND"/>
            <p className="price">18,810</p>
            </div>
            <p style={{margin:0,marginBottom:10,textAlign:"Center",color:"gray"}}>Fixed Price</p>
            </div>
            </div>
        </div>)
}