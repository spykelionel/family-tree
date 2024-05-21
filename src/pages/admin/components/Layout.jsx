import { SideBar } from "@pages/admin/components";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

function Layout() {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);
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
