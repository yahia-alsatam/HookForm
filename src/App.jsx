import { useState } from "react";

import "./App.css";
import FormHook from "./Form/FormHook";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FormHook />
    </>
  );
}

export default App;
