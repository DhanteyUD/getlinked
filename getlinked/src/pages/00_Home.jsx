import React from "react";
import {
	Header,
	HeroContent,
	IntroContent,
	RuleContent,
	AttributeContent,
	FAQsContent,
	TimelineContent,
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
				<TimelineContent />
			</div>
		</>
	);
}

export default Home;
