import { Route, Routes } from "react-router-dom";
import ROUTES from "./ROUTES";
import HomePage from "../pages/home/HomePage";
import RegisterPage from "../pages/register/RegisterPage";
import LoginPage from "../homeExercise/LoginPage";
import Error from "../layout/error/Error";
import UserManagement from "../pages/users/UserManagement";

const Router = () => {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.USERS} element={<UserManagement />} />
            <Route path="*" element={<Error/>} />
        </Routes>
    );
};
export default Router;