import React, { useState } from "react";
import { useForm } from "../../hooks";
import { generateRegisterFormValues } from "./generateRegisterForm";
import { Button } from "../../atoms";
import { Input } from "../../atoms";
import { useDispatch } from "react-redux";
import { authenticatedUser } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router";
import { Alert } from "@mui/material";

export const RegisterForm = () => {
  const {
    formValues: registerFormValues,

    onFormChange,
  } = useForm(generateRegisterFormValues());
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const onSubmitHandler = () => {
    const firstName = registerFormValues.firstName.value;
    const lastName = registerFormValues.lastName.value;
    const email = registerFormValues.email.value;
    const password = registerFormValues.password.value;
    dispatch(
      authenticatedUser({
        formValues: { firstName, lastName, email, password },
        isLogin: false,
      })
    )
      .unwrap()
      .then(() => navigate("/"))
      .catch((error) => {
        console.error(error);
        setError(true);
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
        name="firstName"
        label="firstName"
        value={registerFormValues.firstName.value}
        error={registerFormValues.firstName.error}
        onChange={onFormChange}
      />
      <Input
        name="lastName"
        label="lastName"
        value={registerFormValues.lastName.value}
        error={registerFormValues.lastName.error}
        onChange={onFormChange}
      />
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
      {error && (
        <Alert severity="error">
          You cant Register with this email, You are Blocked !
        </Alert>
      )}
    </form>
  );
};
