import React from "react";
import { Header, HeroContent, IntroContent } from "../components";

function Home() {
	return (
		<>
			<div className="app">
				<Header />
				<HeroContent />
				<IntroContent />
			</div>
		</>
	);
}

export default Home;
