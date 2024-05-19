function ReportCard({ icon, title, color }) {
  return (
    <div className="w-52 flex flex-col justify-evenly p-2 bg-white border border-gray-200 rounded-lg">
      <div className="flex flex-row justify-evenly items-center">
        <img src={icon} alt="report_new" width={100} />
        <span className={`ms-1 text-lg font-normal text-${color}-500`}>
          {title}
        </span>
      </div>
      <div className="flex flex-col justify-between gap-2">
        <div className="flex flex-row justify-between items-center">
          <p className="p-0 m-0 text-md">57% since last month</p>
          <p className="p-2 m-0 text-xs bg-slate-300 rounded-sm cursor-pointer hover:bg-slate-400">
            0.6%
          </p>
        </div>
        <p className="p-0 m-0 text-gray-400">10% increase in total crimes</p>
      </div>
    </div>
  );
}

export default ReportCard;
