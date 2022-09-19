import React from "react";
import MenuFlat from "./MenuFlat";

class DeleteFlats extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        flats: []
    }
    this.deleteflat = this.deleteflat.bind(this);
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
  deleteflat(event){
    const id = event.target.id.value;
    const request = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json'}
    };
    fetch("http://localhost:8084/api/Flat/"+id, request)
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
    return(
        <div class="container-sm" >
            <MenuFlat />
            <br></br>
            <br></br>
            <h3>Delete Flat</h3> 
            <form class="form-group" onSubmit={this.deleteflat}>
                <select class="form-control" name="id">
                    <option>---Chose---</option>
                    {
                        this.state.flats.map(flat => (
                            <option value={flat.id}>{flat.flatid}</option>
                        ))
                    }
                </select>
                <button class="btn btn-danger">Delete</button>
            </form>
        </div>
    )
}

}
 
export default DeleteFlats;