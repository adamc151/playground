import React, { useContext } from "react";
import AppContext from "../../state/context";
import { setName } from "../../state/actions/actions";
import { useForm, SubmitHandler } from "react-hook-form";

interface Inputs {
  example: string;
  exampleRequired: string;
}

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const { dispatch } = useContext(AppContext);

  const onSubmit: SubmitHandler<Inputs> = (data) =>
    dispatch(setName(data.example));

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input
        placeholder="name"
        {...register("example", {
          required: "required yoo",
          validate: (value) => value === "1",
        })}
      />
      {/* errors will return when field validation fails  */}
      <div>{errors.example && <span>This field is required</span>}</div>
      <input type="submit" />
    </form>
  );
}
