import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./custom-toast.css";
import "./index.css";
import { ToastContainer } from "react-toastify";

// Comment

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App />
    <ToastContainer position="top-center" limit={3} />
  </>,
);
