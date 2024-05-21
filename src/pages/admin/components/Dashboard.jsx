import { Header } from "@pages/admin/components/partials";
import { Spinner } from "@components/Spinner";
import { useEffect } from "react";
import { MemberTable } from ".";
import { useGetStatisticsQuery } from "../../../app/services/admin.service";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { data, isLoading, status } = useGetStatisticsQuery("stats");
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    totalMembers: 6,
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
    <div className="p-2">
      <Header />
      <div className="my-2">
        <div className="flex flex-col sm:flex-row justify-between my-2">
          {isLoading ? (
            <Spinner />
          ) : (
            <div className="flex flex-wrap flex-row gap-2">
              <MemberCard
                count={stats.totalMembers}
                title="Total Members"
                onClick={() => navigate("/admin/members")}
              />
              <MemberCard count={stats.fathersCount} title="Total Fathers" />
              <MemberCard count={stats.mothersCount} title="Total Mothers" />
            </div>
          )}
        </div>

        <div className="flex flex-row gap-2">
          <div className="flex my-2 flex-col gap-2 overflow-x-auto border rounded-md p-2">
            <p className="p-0 font-bold text-gray-800">Crime Report Table</p>
            {/* add data prop and pagination component. Data should come from crime-store */}
            <MemberTable />
          </div>
        </div>
      </div>
    </div>
  );
}

function MemberCard({ count, title, ...props }) {
  return (
    <div className="flex my-5 cursor-pointer" {...props}>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-slate-100 ">
        <p className="mb-3 text-gray-700  text-center font-bold text-xl">
          {count} <br /> {title}
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
