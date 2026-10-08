export const matchPasswords = (
  password: string,
  confirmPassword: string,
  input: HTMLInputElement
): void => {
  if (confirmPassword !== password) {
    input.setCustomValidity("Passwords do not match");
  } else {
    input.setCustomValidity("");
  }
};
