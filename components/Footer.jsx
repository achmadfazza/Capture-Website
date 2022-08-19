import React from "react";
import { FaGithub, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
	return (
		<footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 fixed bottom-0">
			<span className="text-sm text-gray-500 sm:text-center">
				<a href="/">Capture&#174;</a>. All Rights Reserved.
			</span>
			<ul className="flex flex-wrap items-center mt-3 text-sm sm:mt-0">
				<li>
					<a
						href="https://github.com"
						aria-label="github"
						target="_blank"
						className="mr-4 hover:underline md:mr-6 pr-3 ">
						<FaGithub size={25} />
					</a>
				</li>
				<li>
					<a
						href="https://facebook.com"
						aria-label="facebook"
						target="_blank"
						className="mr-4  hover:underline md:mr-6 pr-3 ">
						<FaFacebook size={25} />
					</a>
				</li>
				<li>
					<a
						href="https://instagram.com"
						aria-label="instagram"
						target="_blank"
						className="mr-4 hover:underline md:mr-6 pr-3 ">
						<FaInstagram size={25} />
					</a>
				</li>
				<li>
					<a
						href="https://twitter.com"
						aria-label="twitter"
						target="_blank"
						className="mr-4 hover:underline md:mr-6 pr-3 ">
						<FaTwitter size={25} />
					</a>
				</li>
			</ul>
		</footer>
	);
}

export default Footer;
