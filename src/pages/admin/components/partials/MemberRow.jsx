import { ModalWrapper } from "@components";
import { Button, Spinner, SuccessSvg } from "@components/atoms";
import { useEffect, useState } from "react";
import { useUpdateMemberMutation } from "../../../../app/services/admin.service";

export function MemberRow({
  idx,
  _id,
  name,
  email,
  dateOfBirth,
  placeOfResidence,
  phoneNumber,
  father,
  mother,
  members,
}) {
  const init = {
    name,
    email,
    dateOfBirth,
    placeOfResidence,
    phoneNumber,
    father,
    mother,
  };
  const [form, setForm] = useState(init);

  const [openEditModal, setOpenEditModal] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);

  const [updateMember, { isLoading }] =
    useUpdateMemberMutation("update-member");

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    try {
      const res = await updateMember({ body: form, id: _id }).unwrap();
      console.log(res);
      if (res) {
        setOpenSuccessModal(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => console.log(members), []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <tr className="bg-white border-b  hover:bg-gray-50 ">
      <td className="px-6 py-2">{idx}</td>
      <td className="px-6 py-2">{name ?? "None"}</td>

      <td className="px-6 py-2">{email ?? "none"}</td>
      <td className="px-6 py-2 text-nowrap">{dateOfBirth ?? "None"}</td>
      <td
        className={`px-0 cursor-pointer text-center text-gray-900 py-0 rounded-md`}
      >
        {placeOfResidence ?? "None"}
      </td>
      <td className="px-6 py-2">{phoneNumber ?? "None"}</td>
      <td className="px-6 py-2">{mother?.name ?? "None"}</td>
      <td className="px-6 py-2">{father?.name ?? "None"}</td>
      <td className="px-6 py-2 flex flex-row gap-2">
        <Button
          title={"Edit"}
          type={"primary"}
          onClick={() => setOpenEditModal(true)}
        />
        <Button title={"Delete"} type={"gray"} />
      </td>
      {openEditModal && (
        <ModalWrapper
          openModal={openEditModal}
          closeModal={() => setOpenEditModal(false)}
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
              <div className="mb-5">
                <label
                  for="mother"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Select Mother
                </label>
                <select
                  value={form.mother}
                  id="mother"
                  name="mother"
                  class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                  onChange={handleChange}
                >
                  {members.map((member) => (
                    <option key={member?._id} value={member?._id}>
                      {member?.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-5">
                <label
                  for="father"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Select Father
                </label>
                <select
                  value={form.father}
                  id="father"
                  name="father"
                  class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                  onChange={handleChange}
                >
                  {members.map((member) => (
                    <option key={member?._id} value={member?._id}>
                      {member?.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-full">
                {isLoading ? (
                  <Spinner />
                ) : (
                  <button
                    type="submit"
                    className="text-white bg-blue-500 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center  "
                  >
                    Update member
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
                <p>Member has been updated successfully. </p>
                <div className="flex flex-row justify-between items-center gap-4">
                  <Button
                    title={"Return"}
                    type={"gray"}
                    onClick={() => {
                      setOpenSuccessModal(false);
                      setOpenEditModal(false);
                    }}
                  ></Button>
                </div>
              </div>
            </ModalWrapper>
          )}
        </ModalWrapper>
      )}
    </tr>
  );
}
