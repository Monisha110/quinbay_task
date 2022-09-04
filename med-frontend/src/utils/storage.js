const TOKEN = "iam-tk";

export const getToken = () => {
  return localStorage.getItem(TOKEN);
};

export const setToken = (value) => {
  localStorage.setItem(TOKEN, value);
};

export const deleteToken = () => {
  localStorage.removeItem(TOKEN);
};
