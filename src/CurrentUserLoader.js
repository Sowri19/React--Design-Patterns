import React, { useState, useEffect } from "react";
import axios from "axios";

export const CurrentUserLoader = ({ children }) => {
  const [user, setUser] = useState(null);

  //   This is loading all the data from the server and can be injected into many components
  useEffect(() => {
    (async () => {
      const response = await axios.get("/current-user");
      setUser(response.data);
    })();
  }, []);
  // When working with React components, sometimes you may need to modify or add props to the children of a parent component.
  // However, directly modifying the props of the children is not recommended, as it goes against the principle of immutability in React.
  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }
        // here we are just adding the validation to check if the child is a valid element, and if it is, we are cloning it and passing the user as a prop
        return child;
      })}
    </>
  );
};
