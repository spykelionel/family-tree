import React from "react";
import MemberTable from "./MemberTable";

function Members() {
  return (
    <div>
      <p>Effectively manage your family tree</p>
      <div className="flex my-5">
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ">
          <p className="mb-3 font-normal text-gray-700 ">50 members</p>
          <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800  ">
            Add member
          </button>
        </div>
      </div>
      <MemberTable />
    </div>
  );
}

export default Members;
