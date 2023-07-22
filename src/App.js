import React from "react";
import DivOne from "./components/DivOne";
import DivTwo from "./components/DivTwo";

function App() {
  const [tardis, setTardis] = React.useState({
    name: "Time and Relative Dimension in Space",
    caps: false,
  });

  const updateCapitalization = () => {
    setTardis((prevState) => ({
      ...prevState,
      name: prevState.caps ? prevState.name.toLowerCase() : prevState.name.toUpperCase(),
      caps: !prevState.caps,
    }));
  };

  return (
    <div>
      <h3 onClick={updateCapitalization}>{tardis.name}</h3>
      <DivOne name={tardis.name} onClick={updateCapitalization} />
      <DivTwo name={tardis.name} onClick={updateCapitalization} />
    </div>
  );
}

export default App;
