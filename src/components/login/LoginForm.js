import React from "react";

import { useForm } from "../../hooks";
import { generateRegisterFormValues } from "./GenetareLoginFormValues";
import { Button } from "../../atoms";
import { Input } from "../../atoms";
import { useDispatch } from "react-redux";
import { authenticatedUser } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router";

export const LoginForm = () => {
  const {
    formValues: registerFormValues,

    onFormChange,
  } = useForm(generateRegisterFormValues());
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitHandler = () => {
    const email = registerFormValues.email.value;
    const password = registerFormValues.password.value;
    dispatch(
      authenticatedUser({
        formValues: { email, password },
        isLogin: true,
      })
    )
      .unwrap()
      .then(() => navigate("/"))
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: "20px",
        padding: "150px",
      }}
    >
      <Input
        name="email"
        label="email"
        value={registerFormValues.email.value}
        error={registerFormValues.email.error}
        onChange={onFormChange}
      />
      <Input
        name="password"
        label="password"
        value={registerFormValues.password.value}
        error={registerFormValues.password.error}
        onChange={onFormChange}
      />
      <Button onClick={onSubmitHandler}>Sign Up</Button>
    </form>
  );
};
