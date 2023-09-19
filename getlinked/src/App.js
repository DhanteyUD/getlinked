import React from "react";
import { Routes, Route } from "react-router-dom";
import { NotFound, Home, Contact } from "./pages";

function App() {
	return (
		<Routes>
			<Route path="*" element={<NotFound />} />
			<Route path="/" exact element={<Home />} />
			<Route path="/contact" exact element={<Contact />} />
		</Routes>
	);
}

export default App;
