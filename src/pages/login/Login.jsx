import React, { useState } from "react";
import style from "./login.module.css";
import { Link } from "react-router-dom";
// import { useApi } from "../../customHooks/CustomHooks";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const Login = () => {
  let [loginuser, setLoginuser] = useState({
    email: "",
    password: "",
  });

  // returns NavigateFunction, helps to navigate between components programmatically
  let navigate = useNavigate();
  let handleChange = (e) => {
    let { name, value } = e.target;
    setLoginuser({ ...loginuser, [name]: value });
  };
  let handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        loginuser
      );

      const { user } = response.data;
      localStorage.setItem("userid", user.id);
      toast.success(`Welcome to your profile`);
      navigate("/profile");
    } catch (err) {
      toast.error("Login Failed");
      console.error("Login Failed", err);
    }
  };

  return (
    <main id={style.logincontainer}>
      <section>
        <article>
          <h1>Hello, Friend</h1>
          <p>
            Enter your personal details and start <br /> journey with us
          </p>
          <Link to={"/"}>
            <button>SIGN UP</button>
          </Link>
        </article>
        <article>
          <h1>Sign in</h1>
          <div className={style.iconscontainer}>
            <span>
              <FaGithub />
            </span>
            <span>
              <FaLinkedin />
            </span>
            <span>
              <FaInstagramSquare />
            </span>
          </div>
          <p>or use your account</p>
          <form onSubmit={handleSubmit}>
            <br />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={loginuser.email}
              onChange={handleChange}
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={loginuser.password}
              onChange={handleChange}
            />
            <br />
            <p>
              <Link to={"/"}>
                Don't have an account? <span>Sign Up</span>
              </Link>
            </p>
            <button type="submit">SIGN IN</button>
          </form>
        </article>
      </section>
    </main>
  );
};

export default Login;
