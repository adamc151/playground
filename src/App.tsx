import React, { useReducer } from "react";
import AppContext from "../state/context";
import reducer, { initialState } from "../state/reducers/reducer";
import Output from "./components/Output";
import Input from "./components/Input";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Input />
      <Output />
    </AppContext.Provider>
  );
};

export default App;
