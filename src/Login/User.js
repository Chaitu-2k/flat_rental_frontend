import React from 'react'
import { useNavigate } from 'react-router';
const User = () => {

    const navigate=useNavigate();

  return (
      
    <div className="container">
        <div>
            <h1>User Login</h1>
        </div>
    <form action="/action_page.php" method="post">
    
    <div className="container">
      <label htmlFor="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="uname" required />
      <label htmlFor="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required />
      <button type="submit"   onClick={()=>{navigate('/useroperations')}}>Login</button>
      <label>
        <span className="text"> <a href="#" onClick={()=>{navigate('/user')}}>Register</a></span>
      </label>
    </div>
    <div className="container" style={{backgroundColor: '#f1f1f1'}}>
      <button type="button" className="cancelbtn">Cancel</button>
      <span className="psw">Forgot <a href="#">password?</a></span>
    </div>
  </form>
  </div>
  )
}

export default User
