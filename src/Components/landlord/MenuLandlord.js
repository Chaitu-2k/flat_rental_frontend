import React from "react";

class MenuLandlord extends React.Component {
    render(){
        return (
            <div>
                <table  className="menu">
                    <tbody>
                    <tr>
                        <td><a href="/homell" className="btn btn-primary">Home</a></td>
                        <td><a href="/addll" className="btn btn-primary">Add Landlord</a></td>
                        <td><a href="/viewll" className="btn btn-primary">Show Landlord</a></td>
                        <td><a href="/updatell" className="btn btn-primary">Update Landlord</a></td>
                        <td><a href="/deletell" className="btn btn-primary">Delete Landlord</a></td>
                    </tr>   
                    </tbody>
                </table>
            </div>
        )
    }
}

export default MenuLandlord