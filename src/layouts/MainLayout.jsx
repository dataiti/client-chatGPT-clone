import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Sidebar } from "../layouts";

const MainLayout = () => {
  return (
    <div className="flex">
      <div className="w-[17%] fixed min-h-screen bg-[#202123]">
        <Sidebar />
      </div>
      <div className="w-full min-h-screen flex flex-col ml-[17%] bg-[#343541]">
        <div className="flex-1">
          <Outlet />
        </div>
        <div className="h-12">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
