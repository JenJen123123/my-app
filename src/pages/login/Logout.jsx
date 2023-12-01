import { useDispatch } from "react-redux";
import { authActions } from "../../store/authSlice";
import { Navigate, useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import { toast } from "react-toastify";

const Logout = () => {
    const dispatch = useDispatch();
    const nav = useNavigate();
    dispatch(authActions.logout());
    localStorage.removeItem("token");

    toast("You logged out successfully 👌", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    // nav(ROUTES.HOME);
    return <Navigate to={ROUTES.HOME} />;
}

export default Logout;