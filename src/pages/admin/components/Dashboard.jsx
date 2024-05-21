import report_active from "@assets/images/report_active.svg";
import report_new from "@assets/images/report_new.svg";
import report_resolved from "@assets/images/report_resolved.svg";
import report_total from "@assets/images/report_total.svg";
import { ReportCard } from "@pages/admin/components";
import { Header } from "@pages/admin/components/partials";
import { MemberTable } from ".";

function Dashboard() {
  const time = {
    name: "time",
    options: ["Last week", "Today"],
  };
  const location = {
    name: "location",
    options: ["Bamenda", "Yaounde", "Buea"],
  };
  const category = {
    name: "category",
    options: ["Scam", "Fraud", "Fake News"],
  };
  const state = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  };
  return (
    <div className="p-2">
      <Header />
      <div className="my-2">
        <div className="flex flex-col sm:flex-row justify-between my-2">
          <div className="flex flex-wrap flex-row gap-2">
            <ReportCard title="New Reports" color={"red"} icon={report_new} />
            <ReportCard
              title="Reported cases"
              color={"grey"}
              icon={report_total}
            />
            <ReportCard
              title="Resolved cases"
              color={"gray"}
              icon={report_resolved}
            />
            <ReportCard
              title="Active Investigation"
              color={"blue"}
              icon={report_active}
            />
          </div>
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

export default Dashboard;
