import { useContext } from "react";
import { AuthContent } from "../Provider/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRoute = ({ children }) => {

      const { user, loading } = useContext(AuthContent);
      const location = useLocation();

      if (loading) {
            return <div className="h-[80vh] flex justify-center items-center"><span className="loading loading-bars loading-lg"></span></div>

      }

      if (user) {
            return children;
      }

      return <Navigate to='/login' state={location.pathname}></Navigate>
};


PrivateRoute.propTypes = {
      children: PropTypes.node
}

export default PrivateRoute;