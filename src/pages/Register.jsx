import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContexts } from "../provider/AuthProvider";

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContexts);
   const [nameError, setNameError] = useState("");

const navigate=useNavigate()



  const handleRegister = (e) => {
   
    e.preventDefault();
    //console.log(e.target);
    const form = e.target;
    const name = form.name.value;
    if(name.length<4){
      setNameError('Name should be more then 4 character')
      return
    }else{
      setNameError('')
    }
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
   // console.log({ name, photo, email, password });
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        //console.log(user);

        updateUser({displayName:name, photoURL: photo })
        .then(()=>{
          setUser({...user, displayName:name, photoURL: photo });
          navigate('/')
        })
        .catch(error=>{
          console.log(error)
          setUser(user)
        })
      })
      .catch((error) => {
        //const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold ">Register your account</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <fieldset className="fieldset">
              {/* name */}
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
                required
              />

              {nameError && <p className="text-xs text-error">{nameError}</p>}
              {/* photo url */}
              <label className="label">Photo URL</label>
              <input
                type="text"
                name="photo"
                className="input"
                placeholder="Photo URL"
                required
              />
              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                required
              />
              {/* password */}

              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
                required
              />

              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
              <p className="font-semibold text-center">
                Allready Have An Account ?{" "}
                <Link to="/auth/login" className="text-secondary">
                  Login
                </Link>{" "}
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
