import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCreateMemberMutation } from "../../../app/services/admin.service";
import Spinner from "../../../components/atoms/Spinner";
import MemberTable from "./MemberTable";

function Members() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    dateOfBirth: "",
    placeOfplaceOfResidence: "",
    phoneNumberNumber: "",
  });

  const [createMember, { isLoading }] = useCreateMemberMutation("add member");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createMember(form).unwrap();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <p className="font-bold text-xl my-2">
        Effectively manage your{" "}
        <span className="text-blue-500">Family tree</span>
      </p>
      <div className="flex my-5">
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ">
          <p className="mb-3 font-normal text-gray-700 ">50 members</p>
          <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-800  ">
            Add member
          </button>
        </div>
      </div>
      <div className="grid place-items-center">
        <form className="w-1/2 mx-auto shadow-md p-5" onSubmit={onSubmit}>
          <p className="py-2 font-bold text-lg text-center">
            Add a member to your <br />
            <span className="text-blue-500">Family tree</span>
          </p>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Member Name
            </label>
            <input
              type="name"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
              placeholder="member name"
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Member email
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
              htmlFor="dateOfBirth"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Date of Birth
            </label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={form.dateOfBirth}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
              placeholder="Date of Birth"
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="placeOfResidence"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Place of placeOfResidence
            </label>
            <input
              type="text"
              id="placeOfResidence"
              name="placeOfResidence"
              value={form.placeOfResidence}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
              placeholder="Place of placeOfResidence"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="phoneNumber"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              phoneNumber number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={form.phoneNumber}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
              placeholder="phoneNumber"
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
      <MemberTable />
    </div>
  );
}

export default Members;
