"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { loginUser } from "@/services/login";
import LoginBtn from "@/components/ui/LoginBtn";
import LoginHelp from "@/components/section/LoginHelp";
import LoginError from "@/components/section/LoginError";
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { token } = await loginUser(username, password);
      Cookies.set("token", token, { expires: 1 });
      Cookies.set("username", username, { expires: 1 });
      window.location.reload();
      router.push("/home");
    } catch (error) {
      setError("Oops, it looks like you entered the wrong credential");
    }
  };

  return (
    <section className=" h-[30rem] w-full mt-4 flex flex-col items-center justify-center">
      <LoginHelp />
      <form
        onSubmit={handleLogin}
        className="border-2  rounded-xl shadow-xl my-4  w-80 p-10"
      >
        <h1 className="w-full text-center font-bold text-2xl text-primary">
          Login
        </h1>
        <div className="flex flex-col mt-4">
          <span className="font-light text-sm">Username</span>
          <input
            type="text"
            className="border-b-2 focus:border-primary"
            placeholder="type your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col mt-2">
          <span className="font-light text-sm">Password</span>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          className="w-full bg-primary text-white font-semibold rounded-lg mt-2"
          type="submit"
        >
          Login
        </button>
      </form>
      {error && <LoginError error={error} />}
    </section>
  );
};

export default LoginPage;
