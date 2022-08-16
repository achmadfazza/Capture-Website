import React from "react";
import { SliderData } from "./SliderData";
import Image from "next/image";

function Slider({ slides }) {
	return (
		<div id="gallery" className="max-w-[1240px] mx-auto mt-5">
			<h1 className="text-4xl text-center text-black font-bold sm:mb-8">Gallery</h1>
			<div className="text-center ">
				{SliderData.map((slide, index) => {
					return (
						<div key={index}>
							<Image
								src={slide.image}
								alt="mountains-image"
								width="1440"
								height="600"
								objectFit="cover"
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Slider;
