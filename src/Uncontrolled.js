import React from "react";

export const Uncontrolled = () => {
  const nameInput = React.createRef();
  const ageInput = React.createRef();
  const hairColorInput = React.createRef();

  const handleSubmit = (event) => {
    console.log(nameInput.current.value);
    console.log(ageInput.current.value);
    console.log(hairColorInput.current.value);
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" ref={nameInput} />
      <input type="number" name="age" placeholder="Age" ref={ageInput} />
      <input
        type="text"
        name="hairColor"
        placeholder="Hair Color"
        ref={hairColorInput}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

// This makes it uncontrolled is that, this component is not caring what values of each of the inputs it,
//  until the form is submitted or any event occurs at point where we get each of the values.
