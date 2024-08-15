import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  ChartPieIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  CogIcon,
} from "@heroicons/react/24/outline";

const SideBar: React.FC = () => {
  const router = useRouter();

  const menuItems = [
    { name: "Dashboard", icon: ChartPieIcon, href: "/dashboard" },
    { name: "Projections", icon: CurrencyDollarIcon, href: "/projections" },
    { name: "Reports", icon: DocumentTextIcon, href: "/reports" },
    { name: "Settings", icon: CogIcon, href: "/settings" },
  ];

  return (
    <div className="w-64 h-full bg-white border-r border-r-gray-200 py-6 flex flex-col justify-between">
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} passHref>
                <div
                  className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                    router.pathname === item.href
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  <item.icon className="mr-3 h-6 w-6" />
                  {item.name}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="px-4">
        <div className="py-4 text-sm text-gray-500 border-t border-gray-200">
          © 2024 FinanceModel Pro
        </div>
      </div>
    </div>
  );
};

export default SideBar;
