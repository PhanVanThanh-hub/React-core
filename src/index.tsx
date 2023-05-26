import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import { styled } from "@mui/material";
import reportWebVitals from "./reportWebVitals";
import { store } from "./app/store";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const StyledSnackbarProvider = styled(SnackbarProvider)(() => ({
  "&.notistack-MuiContent": {
    backgroundColor: "rgba(75,99,237,1)",
  },
}));

root.render(
  <Router>
    <StyledSnackbarProvider maxSnack={3} autoHideDuration={4000}>
      <Provider store={store}>
        <App />
      </Provider>
    </StyledSnackbarProvider>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
