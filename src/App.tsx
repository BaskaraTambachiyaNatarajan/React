import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisiblity] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisiblity(false)}> My Alert</Alert>
      )}
      <Button
        text="Hello Button"
        color="primary"
        onClick={() => setAlertVisiblity(true)}
      />
    </div>
  );
}

export default App;
