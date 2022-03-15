export const verifyTokenStore = () => {
  if (!localStorage.getItem("token")) {
    return false;
  }
  const token = localStorage.getItem("token");
  return token;
};
