import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastFailed = () => {
  toast.error("You need to login first ", {
    position: "top-right",
    autoClose: 700,
    pauseOnFocusLoss: false,
    hideProgressBar: false,
    progress: undefined,
  });
};

export default ToastFailed;
