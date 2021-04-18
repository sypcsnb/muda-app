import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./auth";
import firebaseConfig from "../firebase/config";

const DashBoard = () => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <div className="container mt-5">
        <h1>Welcome</h1>
        <p>This is the dashboard, if you can see this you're logged in.</p>
      </div>
    </div>
  );
};

export default DashBoard;
