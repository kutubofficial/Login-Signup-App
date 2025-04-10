import React, { useState } from "react";
import styles from "./navbar.module.css";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Dark from "../../pages/layout/Dark";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const id = localStorage.getItem("userid");
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleNavigate = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  const logout = () => {
    localStorage.removeItem("userid");
    navigate("/login");
    toast.success("Logout successful");
  };

  return (
    <nav id={styles.navbar}>
      <h3 className={styles.logo}>Logo</h3>

      <div className={styles.rightItems}>
        <div className={styles.darkWrapper}>
          <Dark />
        </div>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}>
          {id ? (
            <li className={styles.logout} onClick={logout}>
              Logout
            </li>
          ) : (
            <>
              <li
                className={styles.loginbtn}
                onClick={() => handleNavigate("/login")}
              >
                Login
              </li>
              <li
                className={styles.signupbtn}
                onClick={() => handleNavigate("/")}
              >
                Signup
              </li>
            </>
          )}
        </ul>

        <div className={styles.menuIcon} onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
