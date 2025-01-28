import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastSuccess = () => {
  toast.success("Item added to your cart ", {
    position: "top-right",
    autoClose: 700,
    pauseOnFocusLoss: false,
    hideProgressBar: false,
    progress: undefined,
  });
};

export default ToastSuccess;
