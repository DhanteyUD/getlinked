import React from "react";
import "./hero.css";

function HeroContent() {
	return (
		<>
			<div className="gl_hero">
				<div className="gl_hero_left">
					<h1>
						getlinked Tech <br />
						Hackathon <span style={{ color: "#D434FE" }}>1.0</span>
					</h1>
					<p>
						Participate in getlinked tech Hackathon 2023 stand a chance to win a
						Big prize
					</p>
					<button>
						<span>Register</span>
					</button>
					<div className="gr_hero_countdown_clock">
						<p>
							00<span className="_clock_indicator">H</span>
						</p>
						<p>
							00<span className="_clock_indicator">M</span>
						</p>
						<p>
							00<span className="_clock_indicator">S</span>
						</p>
					</div>
				</div>
				<div className="gl_hero_right">hello</div>
			</div>
		</>
	);
}

export default HeroContent;
