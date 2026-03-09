"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function ToastProvider() {
  const buttonGradient = "linear-gradient(160deg, #0e466f 0%, #0a3658 42%, #0a243c 100%)";

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
