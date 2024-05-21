import { stringAvatar } from "@lib/util";
import { HomeRounded, Logout, People } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = (props) => {
  const { children, items } = props;
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div className="flex flex-col pr-2">
      <button
        className="w-fit flex flex-row text-blue-500 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150"
        onClick={() => setIsOpened(!isOpened)}
      >
        <div className="flex flex-row gap-x-2 rounded-3xl">{children}</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`w-5 h-5 duration-150 ${isOpened ? "rotate-180" : ""}`}
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpened ? (
        <ul className="mx-2 px-2 border-l text-sm font-small">
          {items.map((item, idx) => (
            <li key={idx}>
              <a
                href={item.href}
                className="flex  gap-x-2 text-blue-500 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150 w-full"
              >
                {item.icon ? (
                  <div className="text-gray-500">{item.icon}</div>
                ) : (
                  <></>
                )}
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};

const Sidebar = () => {
  const navsFooter = [
    {
      href: "javascript:void(0)",
      name: "Settings",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
  ];

  const nav = [
    {
      name: "Dashboard",
      icon: <HomeRounded />,
      items: [{ name: "Manage members", href: "/admin/members", icon: "" }],
    },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-0 h-full border-r bg-blue-500 text-white space-y-8 sm:w-48 rounded-tr-2xl">
        <div className="flex flex-col h-full my-2">
          <div className="h-20 flex flex-row justify-center items-center px-0">
            <Link to={"/admin"}>
              <People />
            </Link>
          </div>
          <div className="flex-1 flex flex-col w-full items-start ml-4 h-full overflow-auto">
            <ul className="px-0 text-sm font-medium flex-1 w-full">
              {nav.map(({ name, icon, items }) => (
                <li className="w-full bg-white my-2 rounded-md ">
                  <Menu items={items}>
                    {icon}
                    {name}
                  </Menu>
                </li>
              ))}
            </ul>
            <div>
              <ul className="px-0 pb-4 text-sm font-medium">
                {navsFooter.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.href}
                      className="flex flex-row items-center gap-x-2 text-white p-2 rounded-lg   hover:text-gray-500 active:bg-gray-100 duration-150"
                    >
                      <div className="text-white hover:text-gray-500">
                        {item.icon}
                      </div>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              <hr className="w-full" />
              <div className="py-4 px-0">
                <div className="flex flex-col gap-2 items-center gap-x-4">
                  <Avatar {...stringAvatar("Alivika tony")} />
                  <div className="flex flex-col items-center">
                    <span className="block text-white text-sm font-semibold">
                      spyke#@mail.con
                    </span>
                    <a
                      href="javascript:void(0)"
                      className="block mt-px text-white hover:text-indigo-600 text-xs my-2"
                    >
                      View profile
                    </a>
                  </div>
                  <div className="flex flex-row gap-2 my-2 cursor-pointer hover:text-gray-200">
                    <Logout />
                    <button>Logout</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
