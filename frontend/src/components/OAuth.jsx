import { GoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";

export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const res = await api.post("/api/auth/google", {
        id_token: credentialResponse.credential,
      });

      dispatch(signInSuccess(res.data));
      navigate("/");
    } catch (error) {
      console.error("Google Login Error:", error);
    }
  };

  const handleGoogleError = () => {
    alert("Google Sign-in failed. Please try again.");
  };

  return (
    <div className="mt-2 flex justify-center">
      <GoogleLogin
        onSuccess={handleGoogleSuccess}
        onError={handleGoogleError}
        size="large"
        shape="rectangular"
      />
    </div>
  );
}
