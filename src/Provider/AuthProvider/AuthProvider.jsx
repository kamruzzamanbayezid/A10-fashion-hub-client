import PropTypes from 'prop-types';

import { createContext } from "react";

export const AuthContent = createContext();

const AuthProvider = ({ children }) => {
      return (
            <AuthContent.Provider>
                  {children}
            </AuthContent.Provider>
      );
};

AuthProvider.propTypes = {
      children: PropTypes.node
}

export default AuthProvider;