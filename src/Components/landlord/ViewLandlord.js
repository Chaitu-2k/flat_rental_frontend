import React from "react";
import axios from 'axios'
import MenuLandlord from "./MenuLandlord";

class ViewLandlord extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            landlord: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:1234/landlord/viewAll')
            .then(response => {
                console.log(response.data)
                this.setState({
                    landlord: response.data
                })
                console.log(response.data)
            })
    }
  
    render() {
        return (
            <div class="container-sm" align='container-fluid'>
                <MenuLandlord />
                <div align='center'><h3>Landlord Information</h3></div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Landlord Id</th>
                            <th>Landlord Name</th>
                            <th>Landlord Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.landlord.map(landlord => (
                                <tr key={landlord.landlordId}>
                                    <td>{landlord.landlordId}</td>
                                    <td>{landlord.landlordName}</td>
                                    <td>{landlord.landlordAge}</td>
                                </tr>   
                            ))
                         }
                    </tbody>
                </table>
                
            </div>
        )
    }

}


export default ViewLandlord;