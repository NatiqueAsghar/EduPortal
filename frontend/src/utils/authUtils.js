import api from "./api";
import { signInSuccess, signOutUserSuccess } from "../redux/user/userSlice";

export const checkAuth = async (dispatch) => {
  try {
    // Add a small delay to ensure cookies are loaded
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Verify authentication
    const response = await api.get("/api/auth/verify");
    dispatch(signInSuccess(response.data));
    return true;
  } catch (error) {
    dispatch(signOutUserSuccess());
    return false;
  }
};

export const clearAuth = (dispatch) => {
  dispatch(signOutUserSuccess());
  return false;
};
