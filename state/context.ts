import React from "react";

interface InitialState {
  name: string;
}

export interface AppContextType {
  state: InitialState;
  dispatch: (c: any) => void;
}

const AppContext = React.createContext<AppContextType>({
  dispatch: () => {},
  state: { name: "" },
});

export default AppContext;
