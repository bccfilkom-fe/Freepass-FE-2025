import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastSuccess = (title) => {
  toast.success(title, {
    position: "top-right",
    autoClose: 500,
    pauseOnFocusLoss: false,
    hideProgressBar: false,
    progress: undefined,
  });
};

export default ToastSuccess;
