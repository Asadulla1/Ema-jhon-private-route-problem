import initializeAuthentication from "../firebase/firebase.initialize";
import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

initializeAuthentication();
const UseFirebase = () => {
  const [user, setUser] = useState({});
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const signInUsingGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      const user = result.user;
      //setUser(user);
      //console.log(user);
    });
  };

  const loggedOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const id = user.uid;
        setUser(id);
        console.log(id);
      }
    });
  }, [user]);

  return {
    signInUsingGoogle,
    loggedOut,
    user,
  };
};

export default UseFirebase;
