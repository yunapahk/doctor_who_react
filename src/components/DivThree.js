import React, { useState } from "react";

function DivThree(props) {
  const [state, setState] = useState({
    name: "Time and Relative Dimension in Space",
    caps: false,
  });

  const updateCapitalization = () => {
    setState((prevState) => ({
      ...prevState,
      name: prevState.caps
        ? prevState.name.toLowerCase()
        : prevState.name.toUpperCase(),
      caps: !prevState.caps,
    }));
  };

  return <div><h3 onClick={updateCapitalization}>{state.name}</h3></div>;
}

export default DivThree;
