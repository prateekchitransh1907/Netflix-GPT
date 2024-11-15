import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { logoutUser, signInUser } from "../utils/userSlice";
import {
  LOGO_URL,
  SUPPORTED_LANGUAGES,
  USER_PIC_URL,
} from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const user = useSelector((store) => store.user);
  const useGpt = useSelector((store) => store.gpt.showGptSearch);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(
          signInUser({ uid: uid, email: email, displayName: displayName })
        );
        // navigate to browser page
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(logoutUser());
        navigate("/");
      }
    });

    return () => {
      //Unsubscribe if the component unmounts
      unsubscribe();
    };
  }, []);
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const handleGptToggle = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-full z-10 flex justify-between flex-col md:flex-row">
      <img className="w-44 mx-auto md:mx-0" alt="netflix-logo" src={LOGO_URL} />
      {user && (
        <div className="flex p-4 justify-between md:justify-normal">
          {useGpt && (
            <select
              onChange={handleLangChange}
              className="hidden md:block p-2 text-white bg-transparent font-bold outline-none border-0 focus:ring-0 focus:outline-none"
            >
              {SUPPORTED_LANGUAGES.map((lang) => {
                return (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                );
              })}
            </select>
          )}
          <button
            className="md:mx-6 text-white font-semibold"
            onClick={handleGptToggle}
          >
            {!useGpt ? "꩜ Use GPT" : "🎬 Movies"}
          </button>
          <img
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            className="md:w-12 md:h-12 rounded-md w-6 h-6"
            src={USER_PIC_URL}
            alt="user-icon"
          />
          {showMenu && (
            <div className="absolute text-white font-thin right-12 md:top-20 top-40 z-20 md:w-56 origin-top-right rounded-md bg-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <p className="block p-2 m-1 font-bold">Hey, {user.displayName}</p>
              <button className="hidden md:block p-2 m-1 ">Payments</button>
              <button className="hidden md:block p-2 m-1">Account</button>
              <button className="hidden md:block p-2 m-1">Settings</button>
              <button className="block p-2 m-1" onClick={handleLogout}>
                Sign Out
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
