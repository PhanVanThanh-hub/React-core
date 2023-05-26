import STORAGE_KEYS from "../constants/storage-keys";

interface UserCredential {
  access: string;
  refresh: string;
}

export const removeSavedUserInfo = () => {
  localStorage.removeItem(STORAGE_KEYS.ACCESS);
  localStorage.removeItem(STORAGE_KEYS.REFRESH);
  localStorage.removeItem(STORAGE_KEYS.USER);
  localStorage.removeItem(STORAGE_KEYS.ROLE);
};

export const removeUserCredential = async () => {
  localStorage.removeItem(STORAGE_KEYS.ACCESS);
  localStorage.removeItem(STORAGE_KEYS.REFRESH);
};

export const saveUsername = async (username: string) => {
  localStorage.setItem(STORAGE_KEYS.USER, username);
};

export const saveUserRole = async (role: string) => {
  localStorage.setItem(STORAGE_KEYS.ROLE, role);
};

export const saveUserCredential = async ({ access, refresh }: UserCredential) => {
  localStorage.setItem(STORAGE_KEYS.ACCESS, access);
  localStorage.setItem(STORAGE_KEYS.REFRESH, refresh);
};

export const getAccessTokenFromStorage = () => {
  const accessToken = localStorage.getItem(STORAGE_KEYS.ACCESS);
  return accessToken;
};

export const getUsernameFromStorage = () => {
  const username = localStorage.getItem(STORAGE_KEYS.USER);
  return username;
};

export const getUserRoleFromStorage = () => {
  const role = localStorage.getItem(STORAGE_KEYS.ROLE);
  return role;
};

export const getUserCredentials = () => {
  const username = localStorage.getItem(STORAGE_KEYS.USER);
  const accessToken = localStorage.getItem(STORAGE_KEYS.ACCESS);
  const role = localStorage.getItem(STORAGE_KEYS.ROLE);

  return { role, username, accessToken };
};
