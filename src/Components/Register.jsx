// Register.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../authProvider/Authprovider";


const Register = () => {
  const { createUser } = useContext(AuthContext);

  const RegisterHandel = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // Firebase create user
    createUser(email, password)
      .then((result) => {
        console.log("User Created:", result.user);
        form.reset();
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={RegisterHandel}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input name="email" type="email" className="input" placeholder="Email" required />
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
                <button type="submit" className="btn btn-neutral mt-4">
                  Register
                </button>
              </fieldset>
            </form>
            <p className="mt-2">
              If you already have an account{" "}
              <Link to="/login" className="link link-primary">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
