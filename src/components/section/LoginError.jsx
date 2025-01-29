import React from "react";

const LoginError = ({ error }) => {
  return (
    <section className="bg-red-300 rounded-xl w-80 h-fit text-sm font-bold relative p-4">
      <h4>{error}</h4>
    </section>
  );
};

export default LoginError;
