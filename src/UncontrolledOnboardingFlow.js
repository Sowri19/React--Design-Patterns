import React, { useState } from "react";

export const UncontrolledOnboardingFlow = ({ children, onFinish }) => {
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentChild = React.Children.toArray(children)[currentIndex];
  // const [stepData, setStepData] = useState({});

  const goToNext = (stepData) => {
    const nextIndex = currentIndex + 1;

    // I can also add and input here to get the stepData from the user.
    const updatedData = {
      ...onboardingData,
      ...stepData,
    };
    // ... is spread operator, which combines two objects into one.(updated data is the combination of onboardingData and stepData)

    console.log(updatedData);

    if (nextIndex < children.length) {
      setCurrentIndex(nextIndex);
    } else {
      onFinish(updatedData);
    }

    // we are checking weather the next index is in the bounds of the children array, if it is then we are setting the next index as the current index, if not then we are calling the onFinish function and passing the updated data as the argument.
    setOnboardingData(updatedData);
  };

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext });
  }

  return currentChild;
};

//  the main app.js has very little control over the data that is being passed to the onboarding flow. The onboarding flow is responsible for collecting the data and passing it back to the main app.js. This is the main difference between controlled and uncontrolled components. In controlled components, the main app.js is responsible for collecting the data, and in uncontrolled components, the component itself is responsible for collecting the data.
