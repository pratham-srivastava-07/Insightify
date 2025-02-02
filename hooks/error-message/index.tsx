import React from "react";
import { FieldErrors } from "react-hook-form";

interface ErrorMessageProps {
  errors: FieldErrors;
  name: string;
  render?: (message: any) => React.ReactNode;
}

const CustomErrorMessage: React.FC<ErrorMessageProps> = ({ errors, name, render }) => {
  const message = errors[name]?.message as string;

  if (!message || message === "Required") {
    return null;
  }

  return (
    <>
      {render ? (
        render(message)
      ) : (
        <p className="text-red-400">{message}</p>
      )}
    </>
  );
};

export default CustomErrorMessage;
