import { SideBar } from "@pages/admin/components";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <SideBar />
      <div className="ml-48 p-2">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
