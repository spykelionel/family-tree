import { Admin } from "@pages/admin";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { adminRoutes } from "./pages/admin/router";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Admin />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    element: <Admin />,
    path: "admin",
    children: adminRoutes,
  },
]);

function App() {
  return (
    <div className="root">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
