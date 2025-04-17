import React, { useState } from "react";
import Profile from "./Profile";
import Settings from "./Settings";
import Interests from "./Interests";

const TabForm = () => {
  const tabData = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (!data.name || data.name.length < 3) {
          err.name = "Name is not valid";
        }
        if (!data.age || data.age < 18) {
          err.age = "Age is less than 18";
        }
        if (!data.email || data.email.length < 3) {
          err.email = "Email is not valid";
        }
        setErr(err);
        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      name: "Interests",
      component: Interests,
      validate: () => {
        const err = {};
        if (data.interests.length === 0) {
          err.interests = "Please select atleast one Interests";
        }
        setErr(err);
        return err.interests ? false : true;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => {
        return true;
      },
    },
  ];
  const [data, setData] = useState({
    name: "",
    email: "",
    age: "",
    interests: [],
    theme: "",
  });
  const [activeTab, setActiveTab] = useState(0);
  const [err, setErr] = useState({});
  const ActiveTabComponent = tabData[activeTab].component;
  const submitHandler = () => {
    console.log(data);
  };
  const nextHandler = () => {
    if (tabData[activeTab].validate()) {
      setActiveTab((prev) => prev + 1);
    }
  };
  const prevHandler = () => {
    if (tabData[activeTab].validate()) {
      setActiveTab((prev) => prev - 1);
    }
  };
  return (
    <>
      <div className="min-h-screen max-w-screen ">
        <h1 className="text-3xl text-center py-5">Tab Form</h1>
        <div className="max-w-4xl mx-auto border border-gray-200 relative">
          {tabData.map((item, index) => (
            <button
              key={index}
              className="px-5 py-3 cursor-pointer"
              onClick={() => setActiveTab(index)}
            >
              {item.name}
            </button>
          ))}
          <div className=" py-5 px-5">
            <ActiveTabComponent data={data} setData={setData} err={err} />
          </div>
          <div className="m-5">
            {activeTab < tabData.length - 1 && (
              <button
                className="px-5 py-1  border border-black cursor-pointer"
                onClick={nextHandler}
              >
                Next
              </button>
            )}
            {activeTab > 0 && (
              <button
                className="px-5 py-1  border border-black cursor-pointer"
                onClick={prevHandler}
              >
                Prev
              </button>
            )}
            {activeTab === tabData.length - 1 && (
              <button
                className="px-5 py-1  border border-black cursor-pointer"
                onClick={submitHandler}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TabForm;
