import "./header.css";
import React from "react";
import navbarMenu from "./navList";
import { NavLink } from "react-router-dom";
import getLinkedLogo from "../../assets/getlinked.svg";

function Header() {
	return (
		<>
			{/* Desktop Nav */}
			<header className="gl_header">
				<div className="gl_logo">
					<img src={getLinkedLogo} alt="getlinked logo" />
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
						href="#"
						className="btn-flip"
						data-back="Register"
						data-front="Register"
					></a>
				</div>
			</header>
		</>
	);
}

export default Header;
