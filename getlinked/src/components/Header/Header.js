import "./header.css";
import React from "react";
import navbarMenu from "./navList";
// import { useNavigate } from "react-router-dom";
// import { HiMenu, HiMenuAlt2 } from "react-icons/hi";

function Header() {
  //   const navigate = useNavigate();
  // const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <>
      {/* Mobile Nav */}
      {/* {isNavExpanded && (
				<div className="cs_header_mobile">
					<div className="cs_header_info_mobile">
						<p onClick={handleNavigateToHome}>HOME</p>
						<p onClick={() => navigate("/track")}>TRACK APPLICATION</p>
					</div>
				</div>
			)} */}

      {/* {isNavExpanded ? (
				<HiMenuAlt2
					className="close_menu_icon_mobile"
					onClick={() => {
						setIsNavExpanded(!isNavExpanded);
					}}
				/>
			) : (
				<HiMenu
					className="open_menu_icon_mobile"
					onClick={() => {
						setIsNavExpanded(!isNavExpanded);
					}}
				/>
			)} */}

      {/* Desktop Nav */}
      <header className="gl_header">
        <div className="cs-logo">
          {/* <img src={CardinalstoneLogo} alt="CS Logo" /> */}
        </div>

        <div className="sidebar-menu">
          {sidebarMenu.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="sidebar-link"
              activeclassname="active"
            >
              <div className="sidebar-icon">{item.icon}</div>
              <div className="sidebar-name">{item.name}</div>
            </NavLink>
          ))}
        </div>
        <button type="button" className="logout-button" onClick={handleLogout}>
          <RiLogoutCircleLine className="logout-icon" />
          Logout
        </button>
      </header>
    </>
  );
}

export default Header;
