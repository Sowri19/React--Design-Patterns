import { UncontrolledOnboardingFlow } from "./UncontrolledOnboardingFlow";

const StepOne = ({ goToNext }) => (
  <>
    <h1>Step One</h1>
    <button onClick={goToNext}>Next</button>
  </>
);
const StepTwo = ({ goToNext }) => (
  <>
    <h1>Step Two</h1>
    <button onClick={goToNext}>Next</button>
  </>
);
const StepThree = ({ goToNext }) => (
  <>
    <h1>Step Three</h1>
    <button onClick={goToNext}>Next</button>
  </>
);
function App() {
  return (
    <UncontrolledOnboardingFlow>
      <StepOne />
      <StepTwo />
      <StepThree />
    </UncontrolledOnboardingFlow>
  );
}

export default App;
