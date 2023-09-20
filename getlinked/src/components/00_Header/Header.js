import "./header.css";
import React, { useCallback, useEffect, useState } from "react";
import navbarMenu from "./navList";
import { useNavigate, NavLink, useLocation } from "react-router-dom";
import getLinkedLogo from "../../assets/getlinked.svg";

function Header() {
	const navigate = useNavigate();
	const location = useLocation();
	const [myLocation, setMyLocation] = useState("");

	const getCurrentTitle = useCallback(() => {
		const header = location.pathname.split("/")[1];
		setMyLocation(header);
	}, [location.pathname]);

	useEffect(() => {
		getCurrentTitle();
	}, [getCurrentTitle]);

	return (
		<>
			{/* Desktop Nav */}
			<header className={`gl_header ${myLocation}`}>
				<div className="gl_logo">
					<img
						src={getLinkedLogo}
						alt="getlinked logo"
						onClick={() => navigate("/")}
					/>
				</div>

				<div className="navbar_menu">
					<div className="navbar_links">
						{navbarMenu.map((item, index) => (
							<NavLink
								to={item.path}
								key={index}
								className="navbar_link"
								activeclassname="active"
							>
								<div className="navbar_name">{item.name}</div>
							</NavLink>
						))}
					</div>

					<a
						className={`btn-flip ${myLocation}`}
						data-back="Register"
						data-front="Register"
						onClick={() => navigate("/register")}
					></a>
				</div>
			</header>
		</>
	);
}

export default Header;
