import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
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
            user
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