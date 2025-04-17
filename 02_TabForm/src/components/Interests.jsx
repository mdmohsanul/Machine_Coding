import React from "react";

const Interests = ({ data, setData, err }) => {
  let { interests } = data;
  const interestsItem = ["Coding", "Music", "Reading"];
  const changeHandler = (e) => {
    const { checked, value } = e.target;
    setData((prev) => ({
      ...prev,
      interests: checked
        ? [...prev.interests, value]
        : prev.interests.filter((item) => item !== value),
    }));
    // if (checked) {
    //   setData((prev) => ({ ...prev, interests: [...prev.interests, value] }));
    // } else {
    //   setData((prev) => prev.interests.filter((item) => item !== value));
    // }
  };
  return (
    <>
      <div>
        <h1 className="text-center text-2xl pb-4">Interests</h1>
        <div>
          <label htmlFor="interests">Interests: </label>
          {interestsItem.map((item, index) => (
            <div key={index}>
              <input
                type="checkbox"
                name="interests"
                id=""
                value={item}
                checked={interests.includes(item)}
                onChange={changeHandler}
              />
              {item}
            </div>
          ))}
          {err.interests && <p className="text-red-500">{err.interests}</p>}
        </div>
      </div>
    </>
  );
};

export default Interests;
