import React from "react";
import ContactForm from "../components/ContactForm";
import Hero from "../components/Hero";

function contact() {
	return (
		<div>
			<Hero heading="Contact Me" message="Submit the form below for more work and quotes" />
			<ContactForm />
		</div>
	);
}

export default contact;
