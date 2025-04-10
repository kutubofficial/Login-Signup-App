import React, { useState } from "react";
import style from "./signup.module.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import toast from "react-hot-toast";

const Signup = () => {
  let [signupUser, setSignupUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const naviate = useNavigate();
  let handleChange = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    setSignupUser({ ...signupUser, [name]: value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log(signupUser);

    try {
      let response = await axios.post(
        "http://localhost:8080/api/auth/signup",
        signupUser
      );
      console.log(response);
      toast.success("registered successfully.!!");
      naviate("/login");
    } catch (error) {
      console.log("error while posting the signupuser", error.response?.data || error.message);
      toast.error("something went wrong.!!");
    }

    // clearing input fields
    setSignupUser({ username: "", email: "", password: "" });
  };

  return (
    <main id={style.signupcontainer}>
      <section>
        <article>
          <h1>Welcome Back!</h1>
          <p>
            To keep connected with us please login <br /> with your personal
            info
          </p>
          <Link to={"/login"}>
            <button>SIGN IN</button>
          </Link>
        </article>
        <article>
          <h1>Create Account</h1>
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
          <p>or use your email for registration</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              name="username"
              value={signupUser.username}
              onChange={handleChange}
            />
            <br />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={signupUser.email}
              onChange={handleChange}
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={signupUser.password}
              onChange={handleChange}
            />
            <br />
            <p>
              <Link to={"/login"}>Already have an account? <span>Log In</span></Link>
            </p>
            <button type="submit">SIGN UP</button>
          </form>
        </article>
      </section>
    </main>
  );
};

export default Signup;
