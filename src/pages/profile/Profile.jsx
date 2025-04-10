import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import style from "./profile.module.css";

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
      <h1>
        {" "}
        Hey {profileData?.username} 👋 <br />
        Welcome to your profile
      </h1>
    </div>
  );
};

export default Profile;
