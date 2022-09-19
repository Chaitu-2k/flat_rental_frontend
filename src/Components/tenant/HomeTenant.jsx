import React from "react";
import MenuTenant from "./MenuTenant";

class HomeTenant extends React.Component {
    render(){
        return(
            <div  className="container-sm">
                <MenuTenant />
                <br></br>
                <br></br>
                <br></br>
                <p><b><font size="+2">Online Flat Rental System is goining to maintain flat information. The following actions can be done</font></b></p>
                <ul>
                    <li>Add Tenants</li><br/>
                    <li>Update Tenant</li><br/>
                    <li>Read Tenants</li><br/>
                    <li>Delete Tenants</li><br/>
                </ul>
            </div> 
        )
    }
}

export default HomeTenant;