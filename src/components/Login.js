import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setSignInform] = useState(true);
  const toggleForm = () => {
    setSignInform(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/IN-en-20241104-TRIFECTA-perspective_55263ea2-af7f-40ed-9cf0-7029a9b9baf4_small.jpg"
          alt="netflix-background"
        />
      </div>
      <form className="absolute p-12 text-white bg-black w-1/3 my-36 mx-auto right-0 left-0 opacity-90 rounded-lg">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            placeholder="Enter your name"
            className="p-4 my-4 w-full rounded-sm bg-gray-800 border-2 border-slate-500"
          />
        )}
        <input
          placeholder="Email or mobile number"
          className="p-4 my-4 w-full rounded-sm bg-gray-800 border-2 border-slate-500"
        />
        <input
          placeholder="Password"
          className="p-4 my-4 w-full rounded-sm bg-gray-800 border-2 border-slate-500	"
        />
        <button className="p-4 my-6  bg-red-700 w-full bg-opacity-100 rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <input
          className="my-5 mr-3 bg-white"
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
