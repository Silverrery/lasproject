import axios from "axios";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const { setUser } = useAuth();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post("http://localhost:8001/auth/login", input);
      localStorage.setItem("token", response.data.token);
      const userInfo = await axios.get("http://localhost:8001/auth/me", {
        headers: { Authorization: `Bearer ${response.data.token}` },
      });
      setUser(userInfo.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
      <form onSubmit={handleSubmit} className="flex w-[30rem] flex-col space-y-10">
        <div className="text-center text-4xl font-medium">Log In</div>
        <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
          <input
            onChange={handleChange}
            value={input.email}
            type="text"
            placeholder="Email or Username"
            className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none"
            name="email"
          />
        </div>
        <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
          <input
            onChange={handleChange}
            value={input.password}
            type="password"
            placeholder="Password"
            className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none"
            name="password"
          />
        </div>
        <button type="submit" className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400">
          LOG IN
        </button>
        <a href="#" className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300">
          FORGOT PASSWORD?
        </a>
        <p className="text-center text-lg">
          No account?{" "}
          <Link to="/register" className="font-medium text-indigo-500 underline-offset-4 hover:underline">
            Create One
          </Link>
        </p>
      </form>
    </main>
  );
}
