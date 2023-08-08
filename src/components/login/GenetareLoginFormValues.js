export const generateRegisterFormValues = () => {
    return {
      email: {
        value: "",
        required: true,
        error: "",
        validateInput: (email) =>
          email.includes("@gmail.com")
            ? null
            : " email have to include '@' symbol",
      },
      password: {
        value: "",
        required: true,
        error: "",
        validateInput: (password) =>
          password.length > 1
            ? null
            : " password should have at least 1 character",
      },
    };
  };
  