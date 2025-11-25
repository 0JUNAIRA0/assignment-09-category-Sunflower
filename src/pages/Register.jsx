import React, { useContext } from 'react';
import { Link } from 'react-router';
import { Authcontext } from '../provider/AuthProvider';

const Register = () => {

   const {registerwithEmailPassword} = useContext(Authcontext);

   const handleSubmit = (e) => {

   }
    return (
         <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form className="fieldset">

             {/* name */}
          <label className="label">Your Name</label>
          <input type="text" className="input" placeholder="full name" />

             {/* photo url */}
          <label className="label">Photo URL</label>
          <input type="email" className="input" placeholder="Enter your photo URL" />

            {/* email */}
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />

          {/* password */}
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />

          <div><a className="link link-hover">Forgot password?</a></div>
          <div><span>Already have an account?</span> <Link to="/login" className="text-blue-500">Log In</Link> </div>
          <button className="btn btn-neutral mt-4">Register</button>
        </form>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;