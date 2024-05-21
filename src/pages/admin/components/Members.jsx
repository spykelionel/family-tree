import { ModalWrapper } from "@components";
import { SuccessSvg } from "@components/atoms";
import React, { useEffect, useState } from "react";
import {
  useCreateMemberMutation,
  useGetStatisticsQuery,
} from "../../../app/services/admin.service";
import Button from "../../../components/atoms/Button";
import Spinner from "../../../components/atoms/Spinner";
import MemberTable from "./MemberTable";

function Members() {
  const init = {
    name: "",
    email: "",
    dateOfBirth: "",
    placeOfplaceOfResidence: "",
    phoneNumberNumber: "",
  };
  const [form, setForm] = useState(init);

  const [openMemberModal, setOpenMemberModal] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);

  const [createMember, { isLoading }] = useCreateMemberMutation("add member");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createMember(form).unwrap();
      if (res.member) {
        setOpenSuccessModal(true);
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const { data, status } = useGetStatisticsQuery("stats");

  const [stats, setStats] = useState({
    totalMembers: 0,
    fathersCount: 0,
    mothersCount: 0,
  });
  useEffect(() => {
    (() => {
      switch (status) {
        case "fulfilled":
          setStats({
            totalMembers: data.stats.totalMembers,
            fathersCount: data.stats.fathersCount,
            mothersCount: data.stats.mothersCount,
          });
          break;

        default:
          break;
      }
    })();
  }, [status]);
  return (
    <div>
      <p className="font-bold text-xl my-2">
        Effectively manage your{" "}
        <span className="text-blue-500">Family tree</span>
      </p>
      <div className="flex my-5">
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ">
          <p className="mb-3 font-normal text-gray-700 text-center">
            {stats.totalMembers} members
          </p>
          <button
            onClick={() => setOpenMemberModal(true)}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-800  "
          >
            Add member
          </button>
        </div>
      </div>

      <MemberTable />
      {openMemberModal && (
        <ModalWrapper
          openModal={openMemberModal}
          closeModal={() => setOpenMemberModal(false)}
          className="h-screen"
        >
          <div className="grid place-items-center">
            <form
              className="w-full h-full mx-auto shadow-md p-5"
              onSubmit={onSubmit}
            >
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
                  Place of Residence
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
                  phone number
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
                    Add member
                  </button>
                )}
              </div>
            </form>
          </div>
          {openSuccessModal && (
            <ModalWrapper
              openModal={openSuccessModal}
              closeModal={() => setOpenSuccessModal(false)}
            >
              <div className="flex flex-col items-center justify-center">
                <SuccessSvg />
                <p>Member has been added successfully. </p>
                <div className="flex flex-row justify-between items-center gap-4">
                  <Button
                    title={"Return"}
                    type={"gray"}
                    onClick={() => {
                      setOpenSuccessModal(false);
                      setOpenMemberModal(false);
                    }}
                  ></Button>
                  <Button
                    title={"Add Another"}
                    type={"primary"}
                    onClick={() => {
                      setOpenSuccessModal(false);
                      setForm(init);
                    }}
                  ></Button>
                </div>
              </div>
            </ModalWrapper>
          )}
        </ModalWrapper>
      )}
    </div>
  );
}

export default Members;
