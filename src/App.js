import { SplitScreen } from "./SplitScreen";

const LeftHandComponent = () => {
  return <h1 style={{ backgroundColor: "green" }}>Left!</h1>;
};
const RightHandComponent = () => {
  return <h1 style={{ backgroundColor: "yellow" }}>Right!</h1>;
};
// the leftHandComponent and RightHandComponent are the children of the SplitScreen component instead
// of props to the components
function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftHandComponent />
      <RightHandComponent />
    </SplitScreen>
  );
}

export default App;
