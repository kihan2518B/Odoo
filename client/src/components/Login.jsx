import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import axios from "axios";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";

function Login({ isAuthenticated, setIsAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:4000/api/v1/user/login",
        { email, password },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        setEmail("");
        setPassword("");
        setIsAuthenticated(true);
        toast.success(res.data.message);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });
  };
  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }
  return (
    <section className="h-screen">
      <h1 className="text-center text-red-500 text-4xl font-semibold mt-8">
        Login
      </h1>
      <div className="container h-full px-6 py-24">
        <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone image"
            />
          </div>
          <form
            className="block max-w-xl mx-auto mt-10"
            onSubmit={handleLogin}
          >
            <input
              required
              type="email"
              id="email"
              name="email"
              className="bg-gray-100 inline-block rounded-lg shadow-md px-6 py-3 mb-5 text-base w-full placeholder-gray-500"
              placeholder="Email"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
            <br />

            <input
              required
              type="password"
              id="password"
              name="password"
              className="bg-gray-100 text-gray-600 inline-block rounded-lg shadow-md px-6 py-3 mb-5 text-base w-full placeholder-gray-500"
              placeholder="Password"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            />
            <br />

            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
            >
              Login
            </button>

            <div className="text-center my-4 text-gray-500 border-t pt-4">
              Dont have account?{" "}
              <Link className="underline" to={"/register"}>
                Register here &raquo;
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
