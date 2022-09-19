import React from "react";
import { Link, useNavigate } from "react-router-dom";
import MenuLandlord from "./MenuLandlord";


class HomeLandlord extends React.Component {
    render(){
        return(
            <div  className="container-sm">
                <MenuLandlord />
                <br></br>
                <br></br>
                <br></br>
                <p><b><font size="+2">Online Flat Rental System is goining to maintain landlord information. The following actions can be done</font></b></p>
                <ul>
                   
                    <li>Add landlord</li><br/>
                    <li>Update landlord</li><br/>
                    <li>View landlord</li><br/>
                    <li>Delete landlord</li><br/>
                    
                </ul>
            </div> 
        )
    }
}

export default HomeLandlord;