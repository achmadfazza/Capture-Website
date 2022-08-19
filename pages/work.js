import React from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Portfolio from "../components/Portfolio";

function work() {
	return (
		<Layout>
			<Hero heading="My Work" message="This is some of my recent work traveling the world" />
			<Portfolio />
		</Layout>
	);
}

export default work;
