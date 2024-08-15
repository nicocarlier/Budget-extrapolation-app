import { Avatar } from "@nextui-org/react";
import Link from "next/link";

const TopBar = () => {
  const userName = "Test User";
  return (
    <div className="px-6 w-full h-16 text-gray-800 flex items-center justify-between border-b border-b-gray-200 bg-white shadow-sm">
      <div className="text-xl font-semibold text-blue-600">
        FinanceModel Pro
      </div>
      <Link href="/account" className="h-10 flex gap-3 items-center">
        <Avatar
          className="w-10 h-10"
          showFallback
          src={"https://i.pravatar.cc/150?u=a04258a2462d826712d"}
        />
        <div className="flex flex-col justify-center">
          <p className="text-sm font-medium text-gray-700">{userName}</p>
          <p className="text-xs text-gray-500">Premium Account</p>
        </div>
      </Link>
    </div>
  );
};

export default TopBar;
