import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import PropTypes from 'prop-types';

import { createContext, useEffect, useState } from "react";
import auth from '../../Config/FIrebaseCconfig';

export const AuthContent = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

      const [user, setUser] = useState({});

      // Google Login
      const googleLogin = () => {
            return signInWithPopup(auth, googleProvider);
      }

      // create user
      const createUser = (email, password) => {
            return createUserWithEmailAndPassword(auth, email, password)
      }

      // update user
      const updateUser = (name, image) => {
            return updateProfile(auth.currentUser, {
                  displayName: name,
                  photoURL: image
            })
      }

      // sign in 
      const logIn = (email, password) => {
            return signInWithEmailAndPassword(auth, email, password);
      }

      // Log out
      const logOut = () => {
            return signOut(auth);
      }

      useEffect(() => {
            const unSubscribe = onAuthStateChanged(auth, currentUser => {
                  setUser(currentUser)
                  console.log('Under OnAUth', currentUser);
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
            logOut
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