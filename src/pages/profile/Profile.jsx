import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import style from "./profile.module.css";
import Lottie from "lottie-react";
import animationData from "./welcome-animation.json";
import { TypeAnimation } from "react-type-animation";

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const userId = localStorage.getItem("userid");
  console.log("User ID:", userId);

  useEffect(() => {
    async function getUserData() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/auth/profile/${userId}`
        );
        console.log(response.data);
        setProfileData(response.data);
        // toast.success(`Welcom ${profileData.username} to your profile.!`);
      } catch (err) {
        console.error("Error fetching profile data", err);
      }
    }
    getUserData();
  }, [userId]);

  return (
    <div id={style.container}>
      <TypeAnimation
        sequence={[
          `Welcome to your profile 👋`,
          2000,
          "Hope you have a great day!",
          2000,
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: "24px", display: "inline-block", marginTop: "20px" }}
        repeat={Infinity}
      />

      <Lottie
        animationData={animationData}
        loop={true}
        className={style.lottieAnimation}
      />
    </div>
  );
};

export default Profile;
