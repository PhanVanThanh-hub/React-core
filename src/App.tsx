import { useEffect } from "react";
import ToggleColorMode from "./theme/theme";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import "../node_modules/@syncfusion/ej2-base/styles/material.css";
import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
import { STATUS_AXIOS } from "./constants";
import { getUserCredentials, getUserRoleFromStorage } from "./services/auth";
import { AppRouter } from "./components/elements/AppRouter";
import { useAppDispatch } from "./app/hooks";
import "./index.css";

function App() {
  const dispatch = useAppDispatch();
  const { accessToken } = getUserCredentials();

  // useEffect(() => {
  //   if (userToken || accessToken) {
  //     dispatch(fetchAuth());
  //   }
  // }, [accessToken, dispatch, userToken]);

  return (
    <ToggleColorMode>
      {/* <AppRouter authorities={userRole} privateRoutes={privateRoutes} publicRoutes={publicRoutes} defaultRedirect="/login" /> */}
    </ToggleColorMode>
  );
}

export default App;
