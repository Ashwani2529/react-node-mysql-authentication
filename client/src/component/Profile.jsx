import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();
  axios.defaults.withCredentials = true;

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("http://localhost:8000/get/profile");
        console.log(response.data);
        if (response.data.login) {
          setUsername(response.data.user.username);
          setEmail(response.data.user.email);
        } else {
          history.push("/login");
        }
      } catch (error) {
        history.push("/login");
      }
    };
    fetchProfile();
  }, [history]);

  return (
    <div className="col-lg-6 col-md-8 col-12 mx-auto">
      <h2>Profile</h2>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default Profile;
