import React from "react";
import {
	Header,
	HeroContent,
	IntroContent,
	RuleContent,
	AttributeContent,
	FAQsContent,
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
				<FAQsContent />
			</div>
		</>
	);
}

export default Home;
