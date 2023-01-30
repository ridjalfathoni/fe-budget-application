import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
    const isAuth =localStorage.getItem('accessToken');
      
    return isAuth;
};

const ProtectedRoute = () => {
    const isAuth = useAuth();
    return isAuth != undefined ? <Outlet/> : <Navigate to="login"/>;
}

export default ProtectedRoute;
