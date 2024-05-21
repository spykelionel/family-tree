export function MemberRow({
  idx,
  crimeId,
  category,
  location,
  platform,
  priority,
  status,
}) {
  return (
    <tr className="bg-white border-b  hover:bg-gray-50 ">
      <td className="px-6 py-2">{idx}</td>
      <td className="px-6 py-2">{crimeId}</td>
      <th
        scope="row"
        className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap "
      >
        {category}
      </th>
      <td className="px-6 py-2">{location}</td>
      <td className="px-6 py-2">{platform}</td>
      <td
        className={`px-0 cursor-pointer text-center text-white py-0 rounded-md ${
          priority.toLocaleLowerCase() === "low"
            ? "bg-yellow-400"
            : priority.toLocaleLowerCase() === "medium"
            ? "bg-orange-500"
            : "bg-red-500"
        }`}
      >
        {priority}
      </td>
      <td
        className={`px-0 cursor-pointer text-center py-0 rounded-md ${
          status.toLocaleLowerCase() === "active"
            ? "text-yellow-400"
            : status.toLocaleLowerCase() === "resolved"
            ? "text-blue-500"
            : "text-red-500"
        }`}
      >
        {status}
      </td>
      <td className="px-6 py-2 text-right">
        <a href="#" className="font-medium text-blue-600 hover:underline">
          Edit
        </a>
      </td>
    </tr>
  );
}
