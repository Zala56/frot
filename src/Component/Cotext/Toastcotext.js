import { createContext } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toastcotext = createContext();

export const ToastContextProvider = ({ children }) => {
  return (
    <Toastcotext.Provider value={{ toast }}>
      <ToastContainer autoClose={2000} />
      {children}

    </Toastcotext.Provider>
  );
};

export default Toastcotext;