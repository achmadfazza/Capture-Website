import React from "react";
import ContactForm from "../components/ContactForm";
import Hero from "../components/Hero";
import Layout from "../components/Layout";

function contact() {
	return (
		<Layout>
			<Hero heading="Contact Me" message="Submit the form below for more work and quotes" />
			<ContactForm />
		</Layout>
	);
}

export default contact;
