import React from "react";
import { Header, HeroContent, IntroContent, RuleContent } from "../components";

function Home() {
	return (
		<>
			<div className="app">
				<Header />
				<HeroContent />
				<IntroContent />
				<RuleContent />
			</div>
		</>
	);
}

export default Home;
