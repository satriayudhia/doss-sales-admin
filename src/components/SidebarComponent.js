import React, { useState } from "react";
import {
  ProSidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs";

const SidebarComponent = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <ProSidebar className="sidebar-container" collapsed={isCollapsed}>
      <SidebarHeader>
        <div
          className="d-flex align-items-center py-2 px-3 sidebar-menu-container"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed && <BsArrowBarRight className="me-2" size={25} />}
          {!isCollapsed && <BsArrowBarLeft className="me-2" size={25} />}
          {!isCollapsed && <div className="fw-bolder">Sembunyikan Menu</div>}
        </div>
      </SidebarHeader>
      <SidebarContent>
        {/**
         *  You can add the content of the sidebar ex: menu, profile details, ...
         */}
      </SidebarContent>
      <SidebarFooter>
        {/**
         *  You can add a footer for the sidebar ex: copyright
         */}
      </SidebarFooter>
    </ProSidebar>
  );
};

export default SidebarComponent;
