"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function ToastProvider() {
  return (
    <ToastContainer
      position="top-right"
      autoClose={3500}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      pauseOnHover
      draggable={false}
      theme="dark"
      pauseOnFocusLoss
      toastStyle={{
        background: "rgba(8, 20, 34, 0.96)",
        color: "#ffffff",
        fontSize: "14px",
        boxShadow: "0 16px 34px rgba(0, 0, 0, 0.45)",
      }}
      progressClassName="toast-progress"
    />
  );
}
