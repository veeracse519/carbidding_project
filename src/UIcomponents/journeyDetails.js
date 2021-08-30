import React from "react"
import EditIcon from '@material-ui/icons/Edit';
import "../StyledComponents/index.css"
import{Button} from '@material-ui/core';
import{useLocation,useHistory} from "react-router-dom"
import {useState,useContext} from "react"
export default function JourneyDetails({values}){
    const editDetails=()=>{
        history.replace("/")
    }
    const history=useHistory()
    const{state}=values
// console.log(state)
    return(
        <div style={{width:"100%",borderBottom:"1px solid gray"}}>
            <div className="bid-rs">
                <p style={{color:"gray"}}>Jouney Details</p>
                <div onClick={editDetails} style={{display:"flex",alignItems:"center", color:"blue",cursor:"pointer"}}><EditIcon  style={{fontSize:18,cursor:"pointer"}}/> Edit</div>
            </div>
             <div className="journeyDetails">
            <strong>{state.source} - {state.dest}</strong><br/>
            <strong>{state.members} Persons, {state.car}</strong>
            </div> 
        </div>
    )
}