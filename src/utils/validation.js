const regex = {
  userName: /[`!@#$%^&*()+=[\]{};':"\\|,<>/?~]/,
  userEmail:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  phoneNumber: /^(\+\d{1,3}[- ]?)?\d{10}$/,
};

export const errorHelperText = {
  userEmail: "Please enter valid email address",
  emptyField: "Please fill the mandatory field",
};

export const emailValidation = (email, isMandatory) => {
  email = email?.trim();
  if (!email && isMandatory)
    return {
      name: email,
      showHelperText: true,
      helperText: errorHelperText.emptyField,
    };

  if (!regex["userEmail"].test(email.toLowerCase())) {
    return {
      name: email,
      showHelperText: true,
      helperText: errorHelperText.userEmail,
    };
  } else {
    return { name: email, showHelperText: false, helperText: "" };
  }
};
