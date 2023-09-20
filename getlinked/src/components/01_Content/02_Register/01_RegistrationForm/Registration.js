import React from "react";
import "./registration.css";
import PurpleStar from "../../../../assets/purple-gradient-star.svg";
import faintStar from "../../../../assets/star-faint.svg";
import brightStar from "../../../../assets/star-bright.svg";
import darkPurpleStar from "../../../../assets/dark-purple-star.svg";
import registrationImage from "../../../../assets/3d-graphic-designer-showing-thumbs-up-png 1.svg";
import registerFormIcon from "../../../../assets/register-form-icon.png";

function RegistrationContent() {
	return (
		<>
			<div className="gl_register">
				<div className="gl_register_container">
					<img
						src={PurpleStar}
						alt="PurpleStar"
						className="register img_purple_star"
					/>
					<img
						src={faintStar}
						alt="Faint star"
						className="register img_faint_star"
					/>
					<img
						src={darkPurpleStar}
						alt="Dark Purple star"
						className="register img_dark_purple_star"
					/>
					{/* Image */}
					<div className="gl_registration_image">
						<img
							src={registrationImage}
							alt="Registration Image"
							className="gl_registration_image_inner"
						/>
					</div>

					{/* Form */}
					<div className="gl_register_form">
						<img
							src={faintStar}
							alt="Faint star"
							className="register img_faint_star2"
						/>
						<img
							src={brightStar}
							alt="Bright Star"
							className="register img_bright_star"
						/>
						<div className="gl_register_form_container">
							<form className="gl_register_form_inner">
								<h1>Register</h1>
								<p className="gl_part_of_move_p">Be part of this movement!</p>
								<img
									src={registerFormIcon}
									alt="Part of the movement"
									className="register_form_icon"
								/>
								<p className="gl_create_account_p">CREATE YOUR ACCOUNT</p>

								<div className="gl_register_inner_form_container">
									{/* Left */}
									<div className="gl_register_left_form_div">
										<div className="gl_register_left_form_div_items">
											<label htmlFor="teamName">Team’s Name</label>
											<input
												type="text"
												name="teamName"
												placeholder="Enter the name of your group"
											/>
										</div>
										<div className="gl_register_left_form_div_items">
											<label htmlFor="email">Email</label>
											<input
												type="email"
												name="email"
												placeholder="Enter your email address"
											/>
										</div>
										<div className="gl_register_left_form_div_items">
											<label htmlFor="category">Category</label>
											<select name="category" id="category">
												<option disabled selected hidden>
													Select your category
												</option>
												<option value="design">Design</option>
												<option value="development">Development</option>
												<option value="marketing">Marketing</option>
												<option value="business">Business</option>
											</select>
										</div>
									</div>

									{/* Right */}
									<div className="gl_register_right_form_div">
										<div className="gl_register_right_form_div_items">
											<label htmlFor="phone">Phone</label>
											<input
												type="phone"
												name="phone"
												placeholder="Enter your phone number"
											/>
										</div>
										<div className="gl_register_right_form_div_items">
											<label htmlFor="projectTopic">Project Topic</label>
											<input
												type="text"
												name="projectTopic"
												placeholder="What is your group project topic"
											/>
										</div>
										<div className="gl_register_right_form_div_items">
											<label htmlFor="groupSize">Group Size</label>
											<select name="groupSize" id="groupSize">
												<option disabled selected hidden>
													Select
												</option>
												<option value="1-5">1-5</option>
												<option value="6-10">6-10</option>
												<option value="11-15">11-15</option>
												<option value="16-20">16-20</option>
											</select>
										</div>
									</div>
								</div>
								<div className="gl_register_form_submit">
									<button type="submit" className="register_submit_btn">
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

export default RegistrationContent;
