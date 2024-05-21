import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLoginUserMutation } from "../../app/services/auth.service";
import Spinner from "../../components/atoms/Spinner";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const [login, { isLoading }] = useLoginUserMutation("auth-login");

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
    <div className="grid h-screen place-items-center bg-gray-100">
      <form className="w-1/2 mx-auto shadow-md p-5" onSubmit={onSubmit}>
        <p className="py-2 font-bold text-lg text-center">
          Login to continue managing your <br />
          <span className="text-blue-500">family tree</span>
        </p>
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
            Don't have an account?{" "}
            <Link className="text-blue-500" to="/signup">
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
