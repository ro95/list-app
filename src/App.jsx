import * as React from "react";
import CardMui from "./Components/CardMui";
import ResponsiveAppBar from "./Components/ResponsiveAppBar";
const App = () => (
	<div>
		<ResponsiveAppBar />
		<CardMui />
		<CardMui />
		<CardMui />
	</div>
);

export default App;
