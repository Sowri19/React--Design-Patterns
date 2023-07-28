import { Uncontrolled } from "./Uncontrolled";
import { Controlled } from "./ControlledForm";
import { UncontrolledModal } from "./UncontrolledModal";
import { useState } from "react";
import { ControlledModal } from "./ControlledModal";

function App() {
  const [shouldShow, setShouldShow] = useState(false);

  return (
    <>
      <ControlledModal
        shouldShow={shouldShow}
        onRequestClose={() => setShouldShow(false)}
      >
        <h1>Hello!</h1>
      </ControlledModal>
      <button onClick={() => setShouldShow(!shouldShow)}>
        {shouldShow ? "Hide Modal" : "Show Modal"}
      </button>
    </>
  );
}

export default App;

// we are controlling the modals from the parent component.
