import React from "react";

class MenuFlat extends React.Component {
    render(){
        return (
            <div>
                <table  className="menu">
                    <tbody>
                    <tr>
                        <td><a href="/homef" className="btn btn-primary">Home</a></td>
                        <td><a href="/addf" className="btn btn-primary">Add Flats</a></td>
                        <td><a href="/showf" className="btn btn-primary">Show Flats</a></td>
                        <td><a href="/updatef" className="btn btn-primary">Update Flats</a></td>
                        <td><a href="/deletef" className="btn btn-primary">Delete Flats</a></td>
                    </tr>   
                    </tbody>
                </table>
            </div>
        )
    }
}
export default MenuFlat;