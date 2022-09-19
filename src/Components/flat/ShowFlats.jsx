import React from "react";
import MenuFlat from "./MenuFlat";

 class ShowFlats extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            flats: []
        }
    }
    componentDidMount(){
        fetch("http://localhost:8084/api/viewAllflats")
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    flats: data
                });
        }, (error) => {
            alert(error);
        });
    }

    render(){
        return (
            <div className="container-sm" align='container-fluid'>
                <MenuFlat />
                <div align='center'><h3>Flats Information</h3></div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>flatId</th>
                            <th>cost</th>
                            <th>flatAddress</th>
                            <th>flat availability</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.flats.map(flat => (
                                <tr>
                                    <td>{flat.flatid}</td>
                                    <td>{flat.cost}</td>
                                    <td>{flat.flatAddress}</td>
                                    <td>{flat.availability}</td>
                                </tr>   
                            ))
                         }
                    </tbody>
                </table>

            </div>
         )
    }

}


export default ShowFlats;