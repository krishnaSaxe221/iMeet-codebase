import React, { useState } from "react";
import {
  RiHome4Line,
} from "react-icons/ri";
import { FiChevronsLeft, FiChevronsRight, FiUpload } from "react-icons/fi/";
import {
  Sidebar,
  Menu,
  MenuItem
  //useProSidebar
} from "react-pro-sidebar";
import { Link } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Upload from "../components/Upload";

const UploadPage = () =>  {
  //const { collapseSidebar } = useProSidebar();
  const [collapsed, setCollapsed] = useState(false);

  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };
  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <MainLayout>
    <div className="flex">
    <div style={{height:'100vh'}}>
      <Sidebar
        className={`app ${toggled ? "toggled" : ""}`}
        style={{ height: "100%", position: "absolute" }}
        collapsed={collapsed}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
      >
        <main>
          <Menu>
            {collapsed ? (
              <MenuItem
                icon={<FiChevronsRight />}
                onClick={handleCollapsedChange}
              ></MenuItem>
            ) : (
              <MenuItem
                suffix={<FiChevronsLeft />}
                onClick={handleCollapsedChange}
              >
                <div
                  style={{
                    padding: "9px",
                    // textTransform: "uppercase",
                    fontWeight: "bold",
                    fontSize: 14,
                    letterSpacing: "1px"
                  }}
                >
                  CodeBase
                </div>
              </MenuItem>
            )}
            <hr />
          </Menu>

          <Menu>
            <Link to='/dashboard'>
            <MenuItem icon={<RiHome4Line />}>Dashboard</MenuItem>
            </Link>

           <Link to='/upload'>
           <MenuItem icon={<FiUpload />}>Upload</MenuItem>
           </Link> 
          </Menu>

        </main>
      </Sidebar>
    </div>
    <div className="m-auto pl-20 ">
    <Upload />
    </div>
    </div>
    </MainLayout>
  );
}
export default UploadPage
