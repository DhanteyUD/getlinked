import "./header.css";
import React from "react";
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
      <header className="gl_header"></header>
    </>
  );
}

export default Header;
