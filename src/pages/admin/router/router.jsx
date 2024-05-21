import { Dashboard } from "@pages/admin/components";

export const adminRoutes = [
  {
    element: <Dashboard />,
    path: "/admin",
    errorElement: <>This path doesn't exist yet.</>,
  },
  {
    element: <>View Crimes</>,
    path: "/admin/members",
    errorElement: <>This path doesn't exist yet.</>,
  },
];
