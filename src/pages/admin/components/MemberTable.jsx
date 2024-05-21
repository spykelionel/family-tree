import { useEffect } from "react";
import { useGetAllMembersQuery } from "../../../app/services/admin.service";
import { MemberRow } from "./partials";

function MemberTable() {
  const { data, status, isLoading } = useGetAllMembersQuery("members");

  useEffect(() => {
    data && console.log(data.members);
  }, [status]);

  return (
    <table className="w-full text-sm text-left text-gray-500 ">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
        <tr>
          <th scope="col" className="px-6 py-3">
            SN
          </th>
          <th scope="col" className="px-6 py-3">
            Name
          </th>
          <th scope="col" className="px-6 py-3">
            Email
          </th>
          <th scope="col" className="px-6 py-3">
            Date of Birth
          </th>
          <th scope="col" className="px-6 py-3">
            Place Of Residence
          </th>
          <th scope="col" className="px-6 py-3">
            Phone
          </th>
          <th scope="col" className="px-6 py-3">
            Mother
          </th>
          <th scope="col" className="px-6 py-3">
            Father
          </th>
          <th scope="col" className="px-6 py-3">
            <span className="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data?.members?.map((member, idx) => (
            <MemberRow
              key={member._id}
              idx={idx + 1}
              {...member}
              members={data?.members}
            />
          ))}
      </tbody>
    </table>
  );
}

export default MemberTable;
