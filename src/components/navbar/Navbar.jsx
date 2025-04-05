import React, { useState } from "react";
import styles from "./navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Dark from "../../pages/layout/Dark";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const id = localStorage.getItem("userid");
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const logout = () => {
    localStorage.removeItem("userid");
    navigate("/login");
    toast.success("Logout successful");
  };

  return (
    <nav id={styles.navbar}>
      <h3 className={styles.logo}>Logo</h3>

      <div className={styles.darkToggle}>
        <Dark />
      </div>
      {id && (
        <li onClick={logout} className={styles.logout}>
          Logout
        </li>
      )}

      {!id && (
        <div className={styles.menuIcon} onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      )}

      <ul
        className={`${styles.navLinks} ${
          menuOpen && !id ? styles.showMenu : ""
        }`}
      >
        {id ? (
          <li onClick={logout} className={styles.logout}>
            Logout
          </li>
        ) : (
          <>
            <li className={styles.loginbtn}>
              <Link to="/login">Login</Link>
            </li>
            <li className={styles.signupbtn}>
              <Link to="/">Signup</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
