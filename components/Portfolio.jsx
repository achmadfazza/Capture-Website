import Image from "next/image";
import React from "react";

function Portfolio() {
	return (
		<div className="max-w-[1240px] mx-auto py-16 text-center">
			<h1 className="font-bold text-2xl p-4">Travel Photography</h1>
			<div className="grid grid-rows-none md:grid-cols-5 p-4 gap-4">
				<div className="w-full h-full col-span-2 md:col-span-3 sm:row-span-2">
					<Image
						src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
						alt="gambar gunung"
						width="677"
						height="451"
						layout="responsive"
					/>
				</div>
				<div className="w-full h-full">
					<Image
						src="https://images.unsplash.com/photo-1540390769625-2fc3f8b1d50c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80"
						alt="gambar gunung"
						width="215"
						height="217"
						layout="responsive"
						objectFit="cover"
					/>
				</div>
				<div className="w-full h-full">
					<Image
						src="https://images.unsplash.com/photo-1472791108553-c9405341e398?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2437&q=80"
						alt="gambar gunung"
						width="215"
						height="217"
						layout="responsive"
						objectFit="cover"
					/>
				</div>
				<div className="w-full h-full">
					<Image
						src="https://images.unsplash.com/photo-1480497490787-505ec076689f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
						alt="gambar gunung"
						width="215"
						height="217"
						layout="responsive"
						objectFit="cover"
					/>
				</div>
				<div className="w-full h-full">
					<Image
						src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
						alt="gambar gunung"
						width="215"
						height="217"
						layout="responsive"
						objectFit="cover"
					/>
				</div>
			</div>
		</div>
	);
}

export default Portfolio;
