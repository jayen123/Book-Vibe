import React from "react";

export default function Button({ children, isPrimary }) {
  return (
    <button
      className={`btn ${
        isPrimary ? "bg-[#23BE0A]" : "bg-[#59C6D2]"
      } text-white`}
    >
      {children}
    </button>
  );
}
