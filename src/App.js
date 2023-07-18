import { SplitScreen } from "./SplitScreen";

const LeftHandComponent = ({ name }) => {
  return <h1 style={{ backgroundColor: "green" }}>{name}</h1>;
};
const RightHandComponent = ({ message }) => {
  return <h1 style={{ backgroundColor: "yellow" }}>{message}</h1>;
};
// the leftHandComponent and RightHandComponent are the children of the SplitScreen component instead
// of props to the components
function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftHandComponent name="sowri" />
      <RightHandComponent message="this is awesome" />
    </SplitScreen>
  );
}

export default App;
