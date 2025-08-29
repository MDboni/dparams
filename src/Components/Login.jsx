// Login.jsx
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { AuthContext } from "../authProvider/Authprovider";


const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // Firebase login call
    login(email, password)
      .then((result) => {
        console.log("Logged In User:", result.user);
        form.reset();
        navigate('/')
      })
      .catch((error) => {
        console.error("Login Error:", error.message);
      });
  };

  return (
    <div>
      <Navbar />

      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="input"
                    placeholder="Email"
                    required
                  />
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
                    Login
                  </button>
                </fieldset>
              </form>
              <p className="mt-2">
                If you are a new user{" "}
                <Link to="/register" className="link link-primary">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
