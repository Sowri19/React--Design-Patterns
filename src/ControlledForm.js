import React, { useState, useEffect } from "react";

export const Controlled = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [hairColor, setHairColor] = useState("");
  const [errors, setErrors] = useState("");

  useEffect(() => {
    if (name.length < 2) {
      setErrors("Name must be at least 2 characters.");
    } else {
      setErrors("");
    }
  }, [name, age, hairColor]);
  return (
    <form>
      {errors && <p>{errors}</p>}
      <input
        name="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        name="age"
        type="number"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />
      <input
        name="hariColor"
        type="text"
        value={hairColor}
        onChange={(e) => setHairColor(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};

// controlled form is that, we can validate the input while user is typing in the input field.
