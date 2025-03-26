import React from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  return (
    <div className="container">
      <h2>User Details</h2>
      <p>Showing details for user ID: {id}</p>
    </div>
  );
};

export default UserDetails;
