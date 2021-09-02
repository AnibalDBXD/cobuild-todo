const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const validateEmail = (value = ""): string  => {
  let error = "";
  if (!value) {
    error = 'Required';
  } else if (!EMAIL_REGEX.test(value)) {
    error = 'Invalid email address';
  }
  return error;
};

export const validatePassword = (value = ""): string =>{
  let error = "";
  if(value.length < 3){
    error = "The password must have more than 3 characters";
  }
  return error;
};

export const validateConfirmPassword =
  (confirmedPassword: string, password: string ): string => {
    let error = validatePassword(confirmedPassword);
    if(!error){
      if(confirmedPassword !== password){
        error = "Your password and confirmation password do not match";
      }
    }
    return error;
  };