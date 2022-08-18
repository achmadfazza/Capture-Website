import React from "react";

function ContactForm() {
	return (
		<div className="max-w-[1240px] m-auto p-4 h-screen">
			<h1 className="font-bold text-4xl text-center p-5">Let's work together</h1>
			<form className="max-w-[600px] m-auto">
				<div className="grid grid-cols-2 gap-2">
					<input className="border shadow-lg p-3" type="text" placeholder="Name" required />
					<input className="border shadow-lg p-3" type="email" placeholder="Email" required />
				</div>
				<input
					className="border shadow-lg p-3 w-full my-2"
					type="text"
					placeholder="Subjects"
					required
				/>
				<textarea
					className="border shadow-lg p-3 w-full"
					cols="30"
					rows="10"
					placeholder="Message"
					required></textarea>
				<button className="border shadow-lg p-3 w-full mt-2 font-bold text-xl">Submit</button>
			</form>
		</div>
	);
}

export default ContactForm;
