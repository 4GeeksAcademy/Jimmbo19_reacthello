import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import NAV from "../../react_doc/nav_react";
import JumTop from "../../react_doc/jummbotronTop";
import CardHold from "../../react_doc/CardHold";
//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<NAV></NAV>
			<JumTop></JumTop>
			<CardHold></CardHold>
		</div>
	);
};

export default Home;
