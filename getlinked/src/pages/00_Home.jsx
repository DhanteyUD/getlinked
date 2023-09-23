import React, { useEffect } from "react";
import {
	Header,
	HeroContent,
	IntroContent,
	RuleContent,
	AttributeContent,
	FAQsContent,
	TimelineContent,
	PrizeContent,
	SponsorsContent,
	PolicyContent,
} from "../components";

function Home() {
	useEffect(() => {
		document.title = "GetLinked - Welcome 🎉";
	});

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
				<SponsorsContent />
				<PolicyContent />
			</div>
		</>
	);
}

export default Home;
