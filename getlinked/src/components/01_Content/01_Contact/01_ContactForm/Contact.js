import React from "react";
import "./contact.css";
import instagram from "../../../../assets/instagram.svg";
import x from "../../../../assets/x.svg";
import facebook from "../../../../assets/facebook.svg";
import linkedIn from "../../../../assets/linkedin.svg";
import PurpleStar from "../../../../assets/purple-gradient-star.svg";
import faintStar from "../../../../assets/star-faint.svg";
import brightStar from "../../../../assets/star-bright.svg";
import darkPurpleStar from "../../../../assets/dark-purple-star.svg";

function ContactContent() {
	return (
		<>
			<div className="gl_contact">
				<div className="gl_contact_container">
					<img
						src={PurpleStar}
						alt="PurpleStar"
						className="contact img_purple_star"
					/>
					<div className="gl_contact_info">
						<h1>Get in touch</h1>
						<p>Contact Information</p>
						<p>27, Alara Street Yaba 100012 Lagos State</p>
						<p>Call Us : 07067981819</p>
						<p>we are open from Monday-Friday 08:00am - 05:00pm</p>
						<div className="gl_contact_media_div">
							<p>Share on</p>
							<div className="gl_contact_media_icons">
								<img src={instagram} alt="instagram" />
								<img src={x} alt="x" />
								<img src={facebook} alt="facebook" />
								<img src={linkedIn} alt="linkedIn" />
							</div>
						</div>
					</div>
					<div className="gl_contact_form">
						<img
							src={faintStar}
							alt="Faint star"
							className="contact img_faint_star"
						/>
						<img
							src={brightStar}
							alt="Bright Star"
							className="contact img_bright_star"
						/>
						<img
							src={darkPurpleStar}
							alt="Dark Purple star"
							className="contact img_dark_purple_star"
						/>
						<div className="gl_contact_form_container">
							<form className="gl_contact_form_inner">
								<p>Questions or need assistance?</p>
								<p>Let us know about it!</p>
								<input
									type="text"
									className="gl_contact_form_input"
									placeholder="First Name"
								/>
								<input
									type="email"
									className="gl_contact_form_input"
									placeholder="Mail"
								/>
								<textarea
									className="gl_contact_form_input textarea"
									placeholder="Message"
								/>
								<div className="gl_contact_form_submit">
									<button type="submit" className="contact_submit_btn">
										Submit
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ContactContent;
