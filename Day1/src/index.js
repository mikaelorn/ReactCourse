import React from "react";
import ReactDOM from "react-dom";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3000");

socket.on("connect", () => {
	console.log("------------------->connected to server");
});

import { AppContainer } from "react-hot-loader";
// AppContainer is a necessary wrapper component for HMR

import Root from "./root";

const render = Component => {
	ReactDOM.render(
		<AppContainer>
			<Component />
		</AppContainer>,
		document.getElementById("app")
	);
};

render(Root);

// Hot Module Replacement API
if (module.hot) {
	module.hot.accept("./root", () => {
		render(Root);
	});
}
