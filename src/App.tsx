import { useState } from "react";
import { Panel } from './components/Panel/Panel';

function App() {
  const [count, setCount] = useState(0);

  return (
      <Panel />
  );
}

export default App;
