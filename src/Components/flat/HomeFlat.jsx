import React from "react";
import MenuFlat from "./MenuFlat";

class HomeFlat extends React.Component {
    render(){
        return(
            <div  className="container-sm">
                <MenuFlat />
                <br></br>
                <br></br>
                <br></br>
                <p><b><font size="+2">Online Flat Rental System is goining to maintain flat information. The following actions can be done</font></b></p>
                <ul>
                    <li>Add Flats</li><br/>
                    <li>Update Flats</li><br/>
                    <li>Read Flats</li><br/>
                    <li>Delete Flats</li><br/>
                </ul>
            </div> 
        )
    }
}

export default HomeFlat;