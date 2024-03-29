import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import PropTypes from 'prop-types';

import { createContext, useEffect, useState } from "react";
import auth from '../../Config/FIrebaseCconfig';

export const AuthContent = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

      const [user, setUser] = useState({});
      const [loading,setLoading]=useState(true);

      // Google Login
      const googleLogin = () => {
            setLoading(true);
            return signInWithPopup(auth, googleProvider);
      }

      // create user
      const createUser = (email, password) => {
            setLoading(true);
            return createUserWithEmailAndPassword(auth, email, password)
      }

      // update user
      const updateUser = (name, image) => {
            setLoading(true);
            return updateProfile(auth.currentUser, {
                  displayName: name,
                  photoURL: image
            })
      }

      // sign in 
      const logIn = (email, password) => {
            setLoading(true);
            return signInWithEmailAndPassword(auth, email, password);
      }

      // Log out
      const logOut = () => {
            setLoading(true);
            return signOut(auth);
      }

      useEffect(() => {
            const unSubscribe = onAuthStateChanged(auth, currentUser => {
                  setUser(currentUser)
                  setLoading(false);
            })

            return () => {
                  unSubscribe()
            }
      }, [])

      const authentication = {
            googleLogin,
            user,
            createUser,
            updateUser,
            logIn,
            logOut,
            loading
      }

      return (
            <AuthContent.Provider value={authentication}>
                  {children}
            </AuthContent.Provider>
      );
};

AuthProvider.propTypes = {
      children: PropTypes.node
}

export default AuthProvider;