import React, { useState } from "react";

const AddUser = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`User "${name}" added successfully!`);
  };

  return (
    <div className="container">
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter user name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
    