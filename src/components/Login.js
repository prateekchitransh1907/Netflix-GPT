import { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utils/Validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signInUser } from "../utils/userSlice";
import { BG_IMG } from "../utils/constants";
const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const toggleForm = () => {
    setisSignInForm(!isSignInForm);
  };
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    console.log(email.current.value, password.current.value);
    const message = validateData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    //signin signup user if form has no errors
    if (!isSignInForm) {
      //signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                signInUser({ uid: uid, email: email, displayName: displayName })
              );
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          console.log("signed up as ", user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //signin logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("login as - ", user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);

          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BG_IMG}
          alt="netflix-background"
          className="h-screen object-cover md:w-screen"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-6 text-white bg-black w-3/4 md:w-1/3 my-36 mx-auto right-0 left-0 opacity-90 rounded-lg"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            placeholder="Enter your name"
            className="p-3 my-3 w-full rounded-sm bg-gray-800 border-2 border-slate-500"
          />
        )}
        <input
          ref={email}
          placeholder="Email or mobile number"
          className="p-3 my-3 w-full rounded-sm bg-gray-800 border-2 border-slate-500"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-3 my-3 w-full rounded-sm bg-gray-800 border-2 border-slate-500	"
        />
        <p className="text-red-600 text-xs">{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          className="p-4 my-6  bg-red-700 w-full bg-opacity-100 rounded-lg"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <input
          className="my-3 mr-3 bg-white"
          type="checkbox"
          id="remember-me"
          name="remember-me"
          value={"rememberMe"}
        />
        <label for="vehicle1">Remember Me</label>

        <h1 className="cursor-pointer" onClick={toggleForm}>
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already a user? Sign in now."}
        </h1>
        <p className="my-5 font-medium text-xs text-slate-600">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          Learn more.
        </p>
      </form>
    </div>
  );
};

export default Login;
