import React from "react";

const Profile = ({ data, setData, err }) => {
  const { name, email, age } = data;
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <>
      <div>
        <h1 className="text-center text-2xl pb-4">Profile</h1>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={changeHandler}
            className="border border-black"
          />
          {err.name && <p className="text-red-500">{err.name}</p>}
        </div>
        <div className="py-4">
          <label htmlFor="age">Age: </label>
          <input
            type="number"
            name="age"
            id="age"
            value={age}
            onChange={changeHandler}
            className="border border-black"
          />
          {err.age && <p className="text-red-500">{err.age}</p>}
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={changeHandler}
            className="border border-black"
          />
          {err.email && <p className="text-red-500">{err.email}</p>}
        </div>
      </div>
    </>
  );
};

export default Profile;
