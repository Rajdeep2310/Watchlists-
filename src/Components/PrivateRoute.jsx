// Components/PrivateRoute.js
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  const isAuthenticated = !!localStorage.getItem("email");
  
  return isAuthenticated ? element : <Navigate to="/" />;
};

export default PrivateRoute;
