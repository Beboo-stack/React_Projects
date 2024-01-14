import React from "react";
import Header from "./MainHeader";

const MainLayout = ({ children }) => {
  return (
    <div className="bg-gray-200 h-screen w-screen">
      <Header></Header>
      <h1>MainLayout</h1>
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
