export const initialState = {
  name: "",
};

export default (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};
