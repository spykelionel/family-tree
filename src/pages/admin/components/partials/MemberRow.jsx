export function MemberRow({
  idx,
  name,
  email,
  dateOfBirth,
  placeOfResidence,
  phoneNumber,
  father,
  mother,
}) {
  return (
    <tr className="bg-white border-b  hover:bg-gray-50 ">
      <td className="px-6 py-2">{idx}</td>
      <td className="px-6 py-2">{name ?? "None"}</td>

      <td className="px-6 py-2">{email ?? "none"}</td>
      <td className="px-6 py-2 w-fit">{dateOfBirth ?? "None"}</td>
      <td
        className={`px-0 cursor-pointer text-center text-white py-0 rounded-md`}
      >
        {placeOfResidence ?? "None"}
      </td>
      <td className="px-6 py-2">{phoneNumber ?? "None"}</td>
      <td className="px-6 py-2">{mother?.name ?? "None"}</td>
      <td className="px-6 py-2">{father?.name ?? "None"}</td>
      <td className="px-6 py-2 text-right">
        <a href="#" className="font-medium text-blue-600 hover:underline">
          Edit
        </a>
      </td>
    </tr>
  );
}
