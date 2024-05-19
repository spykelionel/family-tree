import { LanguageSelector } from "@components";
import { stringAvatar } from "@lib/util";
import { Message, NotificationsActive } from "@mui/icons-material";
import { Avatar } from "@mui/material";

export function Header() {
  return (
    <div className="flex flex-row items-center justify-between text-blue-950">
      <p className="text-gray-600">
        Welcome back{" "}
        <span className="font-bold text-blue-700">{"Spyke Lionel"}</span>!
      </p>
      <div className="flex flex-row gap-2 items-center">
        <NotificationsActive />
        <Message />
        <LanguageSelector />
        <Avatar {...stringAvatar("Spyke Lionel")} />
      </div>
    </div>
  );
}
