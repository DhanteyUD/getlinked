import React from "react";
import {
	Header,
	HeroContent,
	IntroContent,
	RuleContent,
	AttributeContent,
	FAQsContent,
	TimelineContent,
	PrizeContent,
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
				<PrizeContent />
			</div>
		</>
	);
}

export default Home;
