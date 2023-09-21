import React from "react";
import { Routes, Route } from "react-router-dom";
import { NotFound, Home, Contact, Register } from "./pages";
import { Getlinked } from "./screens/Home";

function App() {
	return (
		<Routes>
			<Route path="*" element={<NotFound />} />
			<Route path="/" exact element={<Home />} />
			<Route path="/contact" exact element={<Contact />} />
			<Route path="/register" exact element={<Register />} />
			<Route path="/timeline" exact element={<Getlinked />} />
		</Routes>
	);
}

export default App;
