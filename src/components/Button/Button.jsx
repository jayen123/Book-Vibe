import React from "react";

export default function Button({ children, isPrimary, className, ...props }) {
  return (
    <button
      className={`btn ${className} ${
        isPrimary ? "bg-[#23BE0A]" : "bg-[#59C6D2]"
      } text-white`}
      {...props}
    >
      {children}
    </button>
  );
}
