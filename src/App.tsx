/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

//Ionic Imports
import { IonApp, setupIonicReact } from "@ionic/react";

//React Imports
import "./theme/variables.css";
import { Fragment, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

//Redux Imports
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { fetchUser } from "./store/User/userActions";

//Pages Imports
import Menu from "./components/UI/Menu/Menu";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Loader from "./components/UI/Loader/Loader";
import Marketplace from "./pages/Marketplace/Marketplace";
import Wallet from "./pages/Wallet/Wallet";
import Transactions from "./pages/Transactions/Transactions";
import UserSetting from "./pages/UserSetting/UserSetting";
import Trades from "./pages/Trades/Trades";
import Transfer from "./pages/Transfer/Transfer";
import { authActions } from "./store/Authentication/authentication";

setupIonicReact();

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state) => state.authentication.isAuth);
  console.log("isAuth", isAuth);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      return;
    }

    const userId = localStorage.getItem("userId");

    if (!userId) {
      return;
    }

    dispatch(
      authActions.login({
        isAuth: true,
        token,
        userId,
      })
    );

    // dispatch(fetchUser(userId, token));
  }, [dispatch]);

  return (
    <IonApp>
      <Router>
        {isAuth && <Menu />}
        <Routes>
          <Route
            path="/"
            element={
              <Fragment>
                {isAuth === null && <Loader />}
                {isAuth === true && <Wallet />}
                {!isAuth && isAuth !== null && <Home />}
              </Fragment>
            }
          />

          <Route
            path="/login"
            element={
              <Fragment>
                {isAuth && <Navigate to="/" />}
                {!isAuth && <Login />}
              </Fragment>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/trades" element={<Trades />} />
          <Route path="/usersetting" element={<UserSetting />} />
          <Route path="/transfer" element={<Transfer />} />
        </Routes>
      </Router>
    </IonApp>
  );
};

export default App;
