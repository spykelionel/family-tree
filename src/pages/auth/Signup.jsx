import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRegisterUserMutation } from "../../app/services/auth.service";
import Spinner from "../../components/atoms/Spinner";

export default function Signup() {
  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
    repeatPassword: "",
  });

  const [login, { isLoading }] = useRegisterUserMutation("auth-register");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(form);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid h-screen place-items-center">
      <form className="w-1/2 mx-auto shadow-md p-5" onSubmit={onSubmit}>
        <p className="py-2 font-bold text-lg text-center">
          Register to have a <br />
          <span className="text-blue-500">family tree</span>
        </p>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your name
          </label>
          <input
            type="name"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
            placeholder="name@family.com"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
            placeholder="Your password"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Repeat password
          </label>
          <input
            type="password"
            id="repeatPassword"
            name="repeatPassword"
            value={form.repeatPassword}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
            placeholder="Your password"
            required
          />
        </div>
        {form.password !== form.repeatPassword && (
          <code className="py-2 text-red-400">Passwords do not match</code>
        )}

        <div className="w-full">
          {isLoading ? (
            <Spinner />
          ) : (
            <button
              type="submit"
              className="text-white bg-blue-500 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center  "
            >
              Submit
            </button>
          )}
          <p className="py-2">
            Already have an account?{" "}
            <Link className="text-blue-500" to="/login">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
