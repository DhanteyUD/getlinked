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
			</div>
		</>
	);
}

export default Home;
