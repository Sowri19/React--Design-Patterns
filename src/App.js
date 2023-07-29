import { UncontrolledOnboardingFlow } from "./UncontrolledOnboardingFlow";

const StepOne = ({ goToNext }) => (
  <>
    <h1>Step One</h1>
    <button onClick={() => goToNext({ name: "sowri" })}>Next</button>
  </>
);
const StepTwo = ({ goToNext }) => (
  <>
    <h1>Step Two</h1>
    <button onClick={() => goToNext({ age: 100 })}>Next</button>
  </>
);
const StepThree = ({ goToNext }) => (
  <>
    <h1>Step Three</h1>
    <button onClick={() => goToNext({ hairColor: "brown" })}>Next</button>
  </>
);
function App() {
  return (
    <UncontrolledOnboardingFlow
      onFinish={(data) => {
        console.log(data);
        alert("onboarding complete!");
      }}
    >
      <StepOne />
      <StepTwo />
      <StepThree />
    </UncontrolledOnboardingFlow>
  );
}

export default App;
