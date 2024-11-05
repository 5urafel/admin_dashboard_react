import React from "react";
import "./topbar.css";
import {
  Settings,
  NotificationsOutlined,
  LanguageOutlined,
} from "@mui/icons-material";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin Dashboard</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsOutlined />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <LanguageOutlined />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>

          <img
            src="../../../../public/bet.jpg"
            alt="Avater"
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
