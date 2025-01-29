import { logoutUser } from "@/services/login";
import { LogOut } from "lucide-react";
import React from "react";

const LogOutBtn = () => {
  return (
    <button
      className="hover:scale-125 text-red-600 transition-all"
      onClick={logoutUser}
    >
      <LogOut className="font-bold" />
    </button>
  );
};

export default LogOutBtn;
