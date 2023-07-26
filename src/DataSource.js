import React, { useState, useEffect } from "react";
import axios from "axios";

export const DataSource = ({
  getDataFunc = () => {},
  resourceName,
  children,
}) => {
  const [state, setState] = useState(null);
  useEffect(() => {
    (async () => {
      const data = await getDataFunc();
      setState(data);
    })();
  }, [getDataFunc]);

  // When working with React components, sometimes you may need to modify or add props to the children of a parent component.
  // However, directly modifying the props of the children is not recommended, as it goes against the principle of immutability in React.

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: state });
        }
        // here we are just adding the validation to check if the child is a valid element, and if it is, we are cloning it and passing the user as a prop
        return child;
      })}
    </>
  );
};
