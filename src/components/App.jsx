import React from "react";
import '../css/App.sass';
import Home from "./Home";

export default class App extends React.Component {
	render() {
		return (
			<div style={{ textAlign: "center" }}>
				<Home />
			</div>
		);
	}
}
