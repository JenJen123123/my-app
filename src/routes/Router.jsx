import { Route, Routes } from "react-router-dom";
import ROUTES from "./ROUTES";
import HomePage from "../pages/home/HomePage";
import RegisterPage from "../pages/register/RegisterPage";
import LoginPage from "../homeExercise/LoginPage";
import Error from "../layout/error/Error";
import AllUsers from "../pages/users/AllUsers";
import User1 from "../pages/users/User1";
import User2 from "../pages/users/User2";
import User3 from "../pages/users/User3";
import User4 from "../pages/users/User4";

const Router = () => {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.USERS} element={<AllUsers/>} />
            <Route path={ROUTES.USERS1} element={<User1/>} />
            <Route path={ROUTES.USERS2} element={<User2/>} />
            <Route path={ROUTES.USERS3} element={<User3/>} />
            <Route path={ROUTES.USERS4} element={<User4/>} />
            <Route path="*" element={<Error/>} />
        </Routes>
    );
};
export default Router;