import { toast } from "react-toastify";
import "react-toastify/ReactToastify.css";


class ToastMessage {
  constructor() {
    this.config = {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    };
  }

  sendMessage = (text, type) => {
    switch (type) {
      case "info":
        toast.info(text, this.config);
        return;
      case "success":
        toast.success(text, this.config);
        return;
      case "error":
        toast.error(text, this.config);
        return;
      case "warn":
        toast.warn(text, this.config);
        return;
      case "default":
        toast(text, this.config);
        return;
    }
  };
}

const sendMessage = new ToastMessage().sendMessage.bind(new ToastMessage());

export { ToastMessage, sendMessage };
