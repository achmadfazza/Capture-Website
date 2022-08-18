import Image from "next/image";
import React from "react";
import { FaInstagram } from "react-icons/fa";

function InstagramItem({ items }) {
	return (
		<div className="relative">
			<a href="https://instagram.com" target="_blank">
				<Image src={items} alt="Image-mountain" className="w-full h-full" layout="responsive" />
				{/* overlay */}
				<div className="flex justify-center items-center absolute top-0 left-0 bottom-0 right-0 hover:bg-black/50 group">
					<p className="text-gray-300 hidden group-hover:block">
						<FaInstagram size={30} />
					</p>
				</div>
			</a>
		</div>
	);
}

export default InstagramItem;
