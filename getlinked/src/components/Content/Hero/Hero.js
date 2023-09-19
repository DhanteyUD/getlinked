import React from "react";
import "./hero.css";
import curvedSTroke from "../../../assets/curved-stroke.svg";
import HRViewer from "../../../assets/man-wearing-smart-glasses-touching-virtual-screen 1.png";
import bubble from "../../../assets/bubble.svg";

function HeroContent() {
	return (
		<>
			<div className="gl_hero">
				<h3>Igniting a Revolution in HR Innovation</h3>
				<img src={curvedSTroke} alt="curved stroke" />

				<div className="gl_hero_container">
					<div className="gl_hero_left">
						<h1>
							getlinked Tech <br />
							Hackathon <span style={{ color: "#D434FE" }}>1.0</span>
						</h1>
						<p>
							Participate in getlinked tech Hackathon 2023 stand a chance to win
							a Big prize
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
					<div className="gl_hero_right">
						<div className="gl_hero_right_images">
							<img src={HRViewer} alt="HR" />
							<img src={bubble} alt="Bubble" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default HeroContent;
