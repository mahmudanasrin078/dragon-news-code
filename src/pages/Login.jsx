import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContexts } from "../provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState();
  const { signIn } = use(AuthContexts);
  const location = useLocation();
  const navigate = useNavigate();
 // console.log(location);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

   // console.log({ email, password });

    signIn(email, password)
      .then((result) => {
        const user = result.user;
       // console.log(user);
        navigate(`${location.state ? location.state : "/"}`);
        // setUser(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        //const errorMessage = error.message;
        // alert(errorCode, errorMessage);
        setError(errorCode);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold ">Login your account</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <fieldset className="fieldset">
              {/* email */}
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                required
              />
              {/* password */}
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
                required
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>

              {error && <p className="text-red-500 text-xl">{error}</p>}

              <button type="submit" className="btn btn-neutral mt-4">
                Login
              </button>
              <p className="font-semibold text-center">
                Dont’t Have An Account ?{" "}
                <Link to="/auth/register" className="text-secondary">
                  Register
                </Link>{" "}
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
