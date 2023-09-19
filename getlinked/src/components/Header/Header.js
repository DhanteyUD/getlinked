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

					<div className="register_btn_container">
						<span className="reg">Register</span>
						<button
							id="work"
							type="button"
							name="Hover"
							className="register_btn"
						>
							Register
						</button>
					</div>
				</div>
			</header>
		</>
	);
}

export default Header;
