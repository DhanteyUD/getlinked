import React, { useState, useEffect } from "react";
import "./registration.css";
import PurpleStar from "../../../../assets/purple-gradient-star.svg";
import faintStar from "../../../../assets/star-faint.svg";
import brightStar from "../../../../assets/star-bright.svg";
import darkPurpleStar from "../../../../assets/dark-purple-star.svg";
import registrationImage from "../../../../assets/3d-graphic-designer-showing-thumbs-up-png 1.svg";
import registerFormIcon from "../../../../assets/register-form-icon.png";
import Modal from "../../../Modal/Modal";
import SuccessModal from "../../../Modal/Success/Success.modal";
import { useWindowSize } from "react-hooks-window-size";
import { registerModel } from "../../../../models/register.model";
import axios from "axios";
import config from "../../../../config.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const backupCategories = [
	{
		id: 1,
		name: "MOBILE",
	},
	{
		id: 2,
		name: "WEB",
	},
	{
		id: 3,
		name: "BACKEND",
	},
];

function RegistrationContent() {
	const [showModal, setShowModal] = useState(false);
	const [modalContent, setModalContent] = useState(null);
	const size = useWindowSize();
	const desktop = size.width > 968;
	const [data, setData] = useState(registerModel);
	const [loading, setLoading] = useState(false);
	const [allCategories, setAllCategories] = useState(backupCategories);

	useEffect(() => {
		document.title = "GetLinked | Register";
	});

	const customId = "custom-id-yes";

	// Error Pop Up:
	const showToastErrorMessage = (error) => {
		toast.error(error, {
			position: toast.POSITION.TOP_CENTER,
			toastId: customId,
			autoClose: 1500,
			hideProgressBar: true,
		});
	};

	const categoryList = async () => {
		try {
			const response = await axios.get(
				`${config.baseUrl}/hackathon/categories-list`
			);

			setAllCategories(response?.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		categoryList();
	}, []);

	const handleFormChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const handleSubmitForm = async (e) => {
		setLoading(true);
		try {
			e.preventDefault();

			// eslint-disable-next-line no-unused-vars
			const info = await axios.postForm(
				`${config.baseUrl}/hackathon/registration`,
				data
			);

			setLoading(false);
			setShowModal(true);
			setModalContent(
				<SuccessModal
					component="register"
					onClose={() => setShowModal(false)}
				/>
			);
			setData(registerModel);
			const categorySelect = document.getElementById("category");
			const groupSizeSelect = document.getElementById("group_size");
			categorySelect.value = "Select your category";
			groupSizeSelect.value = "Select";
		} catch (error) {
			showToastErrorMessage(error?.response?.data?.email[0]);
			setLoading(false);
		}
	};

	useEffect(() => {
		if (showModal) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
	}, [showModal]);

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
							<form
								className="gl_register_form_inner"
								onSubmit={handleSubmitForm}
							>
								<h1>Register</h1>
								<div className="gl_register_form_inner_bottom">
									<div className="gl_movement_div">
										<p className="gl_part_of_move_p">
											Be part of this movement!
										</p>
										<img
											src={registerFormIcon}
											alt="Part of the movement"
											className="register_form_icon"
										/>
									</div>
									<p className="gl_create_account_p">CREATE YOUR ACCOUNT</p>

									<div className="gl_register_inner_form_container">
										<div className="gl_register_form_input">
											{/* Left */}
											<div className="gl_register_left_form_div">
												<div className="gl_register_left_form_div_items">
													<label htmlFor="team_name">Team’s Name</label>
													<input
														type="text"
														name="team_name"
														placeholder="Enter the name of your group"
														value={data.team_name}
														onChange={handleFormChange}
														required
													/>
												</div>
												<div className="gl_register_left_form_div_items">
													<label htmlFor="email">Email</label>
													<input
														type="email"
														name="email"
														placeholder="Enter your email address"
														value={data.email}
														onChange={handleFormChange}
														required
													/>
												</div>
											</div>

											{/* Right */}
											<div className="gl_register_right_form_div">
												<div className="gl_register_right_form_div_items">
													<label htmlFor="phone_number">Phone</label>
													<input
														type="phone"
														name="phone_number"
														placeholder="Enter your phone number"
														value={data.phone_number}
														onChange={handleFormChange}
														required
													/>
												</div>
												<div className="gl_register_right_form_div_items">
													<label htmlFor="project_topic">Project Topic</label>
													<input
														type="text"
														name="project_topic"
														placeholder="What is your group project topic"
														value={data.project_topic}
														onChange={handleFormChange}
														required
													/>
												</div>
											</div>
										</div>

										<div className="gl_register_form_select">
											{/* Left */}
											<div className="select gl_register_left_form_div">
												<div className="gl_register_left_form_div_items">
													<label htmlFor="category">Category</label>
													<select
														name="category"
														id="category"
														onChange={handleFormChange}
														// value={data.category}
														required
													>
														<option disabled selected hidden>
															Select your category
														</option>
														{allCategories.map((category) => (
															<option key={category.id} value={category.id}>
																{category.name}
															</option>
														))}
													</select>
												</div>
											</div>

											{/* Right */}
											<div className="select gl_register_right_form_div">
												<div className="gl_register_right_form_div_items">
													<label htmlFor="group_size">Group Size</label>
													<select
														name="group_size"
														id="group_size"
														onChange={handleFormChange}
														// value={data.group_size}
														required
													>
														<option disabled selected hidden>
															Select
														</option>
														<option value={1}>1</option>
														<option value={5}>5</option>
														<option value={10}>10</option>
														<option value={20}>20</option>
													</select>
												</div>
											</div>
										</div>
									</div>

									<p className="gl_review_p">
										Please review your registration details before submitting
									</p>

									<div className="gl_agreement_div">
										<input
											type="checkbox"
											id="agreement"
											name="privacy_poclicy_accepted"
											value={data.privacy_poclicy_accepted}
											checked={data.privacy_poclicy_accepted}
											onChange={(e) =>
												setData({ ...data, [e.target.name]: e.target.checked })
											}
										/>
										<label htmlFor="privacy_poclicy_accepted">
											I agreed with the event terms and conditions and privacy
											policy
										</label>
									</div>

									<div className="gl_register_form_submit">
										{loading ? (
											<button type="submit" className="register_submit_btn">
												<lord-icon
													src="https://cdn.lordicon.com/pxruxqrv.json"
													trigger="loop"
													colors="primary:#fff,secondary:#ff26b9"
													style={{
														height: "40px",
														width: "40px",
													}}
												></lord-icon>
											</button>
										) : (
											<button type="submit" className="register_submit_btn">
												{desktop ? "Register Now" : "Submit"}
											</button>
										)}
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>

			{showModal && <Modal modalContent={modalContent} />}

			<ToastContainer />
		</>
	);
}

export default RegistrationContent;
