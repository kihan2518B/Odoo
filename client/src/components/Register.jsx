import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";

function Register({ isAuthenticated, setIsAuthenticated }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  // const [avatar, setAvatar] = useState("");

  // const avatarHandler = (e) => {
  //   const file = e.target.files[0];
  //   setAvatar(file);
  // };

  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("password", password);

    // Append avatar only if it is selected
    // if (avatar) {
    //   formData.append("avatar", avatar);
    // }

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/user/register",
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setName("");
      setEmail("");
      setPhone("");
      setPassword("");
      // setAvatar(""); // Reset avatar state after successful registration
      setIsAuthenticated(true);
      toast.success(response.data.message);
    } catch (error) {
      // Handle specific error response and extract error message
      if (error.response && error.response.data) {
        toast.error(error.response.data.message);
      } else {
        // Handle generic errors
        toast.error("An error occurred while registering. Please try again.");
      }
    }
  };

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
<div className="container h-full px-6 py-24">
<h1 className="text-center text-red-500 text-4xl font-semibold mt-8">
        Register
      </h1>
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
            onSubmit={handleRegister}
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
              className="bg-gray-100 inline-block rounded-lg shadow-md px-6 py-3 mb-5 text-base w-full text-gray-600 placeholder-gray-500"
              placeholder="Password"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            />
            <br />

            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
            >
              Register
            </button>
            
            <div className="text-center my-4 text-gray-500 border-t pt-4">
              Existing account?{" "}
              <Link className="underline" to={"/login"}>
                Login here &raquo;
              </Link>
            </div>
          </form>
        </div>
      </div>
  );
}

export default Register;
