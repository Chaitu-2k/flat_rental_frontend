import React,{useState} from 'react'
import { useNavigate} from "react-router-dom";
const Admin = () => {

const [username,setUserName]=useState("");
const [password,setPassword]=useState("");
const navigate=useNavigate();






    return (
        <div>
            <div>
            <h1>Admin Login</h1>
        </div>
        <form action="/action_page.php" method="post">
     
        <div className="container">
          <label htmlFor="uname"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required />
          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required />
          <button type="submit" onClick={()=>{navigate('/adminoperations')}}>Login</button>
          <label>
            <span className="text"> <a href="#" onClick={()=>{navigate('/adminreg')}}>Register</a></span>
          </label>
        </div>
        <div className="container" style={{backgroundColor: '#f1f1f1'}}>
          <button type="button" className="cancelbtn">Cancel</button>
          <span className="psw">Forgot <a href="#">password?</a></span>
        </div>
      </form>
      </div>
      );
}

export default Admin
