import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export const loginUser = async (username, password) => {
  const response = await fetch(`https://fakestoreapi.com/auth/login`, {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (response.ok) {
    Cookies.set("token", data.token);
    Cookies.set("username", username);
    return { token: data.token, message: "Login successful" };
  } else {
    throw new Error("Invalid username or password");
  }
};

export const logoutUser = () => {
  Cookies.remove("token");
  Cookies.remove("username");
  window.location.reload();
};
