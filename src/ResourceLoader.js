import React, { useState, useEffect } from "react";
import axios from "axios";

export const ResourceLoader = ({ resourceUrl, resourceName, children }) => {
  const [state, setState] = useState(null);

  //   This is loading all the data from the server and can be injected into many components
  //   Here we are providing the userId as a prop only to the UserLoader component(but not prop to the children component-against the immutability),
  //   and then using it to fetch the user data from the server.
  useEffect(() => {
    (async () => {
      const response = await axios.get(resourceUrl);
      setState(response.data);
    })();
  }, [resourceUrl]);

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
