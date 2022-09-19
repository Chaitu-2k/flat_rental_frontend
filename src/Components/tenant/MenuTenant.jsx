import React from "react";

class MenuTenant extends React.Component {
    render(){
        return (
            <div>
                <table  className="menu">
                    <tbody>
                    <tr>
                        <td><a href="/homet" className="btn btn-primary">Home</a></td>
                        <td><a href="/addt" className="btn btn-primary">Add Tenants</a></td>
                        <td><a href="/readt" className="btn btn-primary">View Tenants</a></td>
                        <td><a href="/updatet" className="btn btn-primary">Update Tenant</a></td>
                        <td><a href="/deletet" className="btn btn-primary">Delete Tenant</a></td>
                    </tr>   
                    </tbody>
                </table>
            </div>
        )
    }
}
export default MenuTenant;