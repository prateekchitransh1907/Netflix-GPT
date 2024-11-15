export const validateData = (email, pw) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPwValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    pw
  );
  if (!isEmailValid) return "Enter a valid email ID";
  if (!isPwValid) return "Password doesn't match the requirement";

  return null;
};
