import React from "react";

const Alert = ({ message, type, onClose }) => {
  if (!message) return null;

  return (
    <div
      onClick={onClose}
      className={`fixed top-24 left-1/2 transform -translate-x-1/2 ${
        type === "error" ? "bg-red-500" : "bg-green-500"
      } text-white p-4 rounded shadow-md`}
    >
      <span>{message}</span>
      <button className="fixed top-0 right-1.5">&times;</button>
    </div>
  );
};

export default Alert;
