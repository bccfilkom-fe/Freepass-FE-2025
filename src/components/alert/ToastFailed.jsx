import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastFailed = (title) => {
  toast.error(title, {
    position: "top-right",
    autoClose: 700,
    pauseOnFocusLoss: false,
    hideProgressBar: false,
    progress: undefined,
  });
};

export default ToastFailed;
