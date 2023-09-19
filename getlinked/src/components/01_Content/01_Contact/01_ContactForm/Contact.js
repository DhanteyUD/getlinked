import React from "react";
import "./contact.css";
import instagram from "../../../../assets/instagram.svg";
import x from "../../../../assets/x.svg";
import facebook from "../../../../assets/facebook.svg";
import linkedIn from "../../../../assets/linkedin.svg";

function ContactContent() {
	return (
		<>
			<div className="gl_contact">
				<div className="gl_contact_container">
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
					<div className="gl_contact_form"></div>
				</div>
			</div>
		</>
	);
}

export default ContactContent;
