import React, { useContext } from "react";
import AppContext from "../../state/context";

const Output = () => {
  const { state } = useContext(AppContext);

  return <h1>Hi {state.name} from React! Welcome!</h1>;
};
export default Output;
