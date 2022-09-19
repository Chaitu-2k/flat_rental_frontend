import React from 'react'
import { useForm } from 'react-hook-form'
const UserReg = () => {
  const {register,handleSubmit,formState:{errors},reset}=useForm();
  const onSubmit=(data)=>{console.log(data);
  reset();
  };
  return (
      
    <div>
    <div>
        <h1>User Registration</h1>
    </div>
   <form action="action_page.php"onSubmit={handleSubmit(onSubmit)}>
    <div className="container">
      <h1>Register</h1>
      <p>Please fill in this form to create an account.</p>
      <hr />
      <label htmlFor="name"><b>Username</b></label>
      <input type="text" placeholder="Enter username" name="username" id="user" {...register("username",{required:"user name is required"})} />
      {errors.username && (<small className="text-danger">{errors.username.message}</small>)}


    <br></br>
      <label htmlFor="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" id="psw" {...register("password",{required: "You must specify a password",
          minLength: {
            value: 8,
            message: "Password must have at least 8 characters"
          }
        })}/>
              {errors.password && ( <small className="text-danger">{errors.password.message}</small>)}
              <br></br>
              
            <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
      <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required />
      <hr />
      <button type="submit" className="registerbtn" >Register</button>
    </div>
    </form>
</div>
  )
}
export default UserReg
