import React from "react";
import {
	Header,
	HeroContent,
	IntroContent,
	RuleContent,
	AttributeContent,
} from "../components";

function Home() {
	return (
		<>
			<div className="app">
				<Header />
				<HeroContent />
				<IntroContent />
				<RuleContent />
				<AttributeContent />
			</div>
		</>
	);
}

export default Home;
