import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./custom-toast.css";
import "./index.css";
import { ToastContainer, toast } from "react-toastify";
import { css } from "glamor";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App />
    {toast.warn("Salom")}
    <ToastContainer bodyClassName={css({ fontFamily: "Roboto" })} limit={3} />
  </>,
);
