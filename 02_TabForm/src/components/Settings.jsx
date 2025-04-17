import React from "react";

const Settings = ({ data, setData }) => {
  const { theme } = data;
  const changeHandler = (e) => {
    setData((prev) => ({ ...prev, theme: e.target.name }));
  };
  return (
    <>
      <div>
        <h1 className="text-center text-2xl pb-4">Interests</h1>
        <div>
          <label htmlFor="theme">Theme: </label>
          <div>
            <input
              type="radio"
              name="dark"
              id=""
              checked={theme === "dark"}
              onChange={changeHandler}
            />{" "}
            Dark
          </div>
          <div>
            <input
              type="radio"
              name="light"
              id=""
              checked={theme === "light"}
              onChange={changeHandler}
            />{" "}
            Light
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
