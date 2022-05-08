import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";
import googleIcon from "../assets/svg/googleIcon.svg";
import { async } from "@firebase/util";
import { db } from "../firebase.config";
export default function OAuth() {
  const navigate = useNavigate();
  const location = useLocation();
  const onGoogleClik = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      //Check For User
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      //if user Doesn't exist create user
      if (!docSnap.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      navigate("/");
    } catch (error) {
      toast.error("Could not Authorize with Google");
    }
  };
  return (
    <div className="socialLogin">
      <p>Sign {location.pathname === "/sign-up" ? "up" : "in"} with </p>
      <buttton className="socialIconDiv" onClick={onGoogleClik}>
        <img className="socialIconImg" src={googleIcon} alt="google" />
      </buttton>
    </div>
  );
}
