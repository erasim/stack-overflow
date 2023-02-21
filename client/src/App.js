/** @format */

import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./component/login/Navbar";
import Routing from "./component/Routing";
import './component/login/login.css'

export default function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routing />
		</BrowserRouter>
	);
}
