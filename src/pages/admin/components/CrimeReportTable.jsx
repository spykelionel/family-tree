import { CrimeReportRow } from "@pages/admin/components/partials";

function CrimeReportTable() {
  const PRIORITY = ["LOW", "MEDIUM", "HIGH"];
  const crimes = [
    {
      crimeId: "1542dsaf4",
      category: "Phishing",
      location: "Bamenda I",
      platform: "Fb",
      priority: "Low",
      status: "Active",
    },
    {
      crimeId: "154alo3saf4",
      category: "Phishing",
      location: "Bamenda II",
      platform: "Fb",
      priority: "Medium",
      status: "Pending",
    },
    {
      crimeId: "o3df",
      category: "Phishing",
      location: "Bamenda IIsI",
      platform: "Fb",
      priority: "High",
      status: "Resolved",
    },
  ];
  return (
    <table className="w-full text-sm text-left text-gray-500 ">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
        <tr>
          <th scope="col" className="px-6 py-3">
            SN
          </th>
          <th scope="col" className="px-6 py-3">
            Crime ID
          </th>
          <th scope="col" className="px-6 py-3">
            Category
          </th>
          <th scope="col" className="px-6 py-3">
            Location
          </th>
          <th scope="col" className="px-6 py-3">
            Platform
          </th>
          <th scope="col" className="px-6 py-3">
            Priority
          </th>
          <th scope="col" className="px-6 py-3">
            Status
          </th>
          <th scope="col" className="px-6 py-3">
            <span className="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {crimes.map((crime, idx) => (
          <CrimeReportRow key={crime.crimeId} idx={idx + 1} {...crime} />
        ))}
      </tbody>
    </table>
  );
}

export default CrimeReportTable;
