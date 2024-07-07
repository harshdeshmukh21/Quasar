import { useContext, createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  signInWithRedirect,
  getAuth,
} from "firebase/auth";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";

const auth = getAuth(app);

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  // console.log('User', user)

  const changeLoading = () => {
    setLoading(!loading);
  };

  // const googleSignIn = () => {
  //     const provider = new GoogleAuthProvider();
  //     signInWithRedirect(auth, provider)
  // };

  const handleGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const response = await signInWithPopup(auth, provider);
      // alert("Google Sign-in Success");
      //   console.log(response.user);
      setUser(response.user);
      console.log("User", response.user);
    } catch (error) {
      console.error("Google Sign-in Error:", error.code, error.message);
    }
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
        console.log("User", user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("User", currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ handleGoogle, logOut, user, loading, changeLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
