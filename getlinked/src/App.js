import React from "react";
import { Routes, Route } from "react-router-dom";
import { NotFound, Home } from "./pages";

function App() {
	return (
		<Routes>
			<Route path="*" element={<NotFound />} />
			<Route path="/" element={<Home />} />
		</Routes>
	);
}

export default App;
