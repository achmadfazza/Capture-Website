import React from "react";
import { FaGithub, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
	return (
		<footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6">
			<span className="text-sm text-gray-500 sm:text-center">
				<p>Capture&#174;</p>. All Rights Reserved.
			</span>
			<ul className="flex flex-wrap items-center mt-3 text-sm sm:mt-0">
				<li>
					<a
						href="https://github.com"
						target="_blank"
						className="mr-4 hover:underline md:mr-6 pr-3 ">
						<FaGithub size={25} />
					</a>
				</li>
				<li>
					<a
						href="https://facebook.com"
						target="_blank"
						className="mr-4  hover:underline md:mr-6 pr-3 ">
						<FaFacebook size={25} />
					</a>
				</li>
				<li>
					<a
						href="https://instagram.com"
						target="_blank"
						className="mr-4 hover:underline md:mr-6 pr-3 ">
						<FaInstagram size={25} />
					</a>
				</li>
				<li>
					<a
						href="https://twitter.com"
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
