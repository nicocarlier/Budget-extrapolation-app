import React from "react";
import { figtree, red_hat_display } from "@/styles/fonts";
import TopBar from "./TopBar";
import SideBar from "./SideBar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div
      className={`
        ${red_hat_display.variable} ${figtree.variable}
        h-screen flex flex-col w-full min-w-[768px] bg-gray-50
      `}
    >
      <TopBar />
      <div className="h-[calc(100%-64px)] flex-grow flex">
        <SideBar />
        <main className="flex-grow h-full overflow-auto relative flex flex-col">
          <BackgroundAccent />
          <div className="flex-grow h-full flex flex-col p-6">{children}</div>
        </main>
      </div>
    </div>
  );
}

function BackgroundAccent() {
  return (
    <div className="absolute w-full h-full overflow-hidden pointer-events-none">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-50 to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-green-50 to-transparent opacity-50"></div>
    </div>
  );
}
