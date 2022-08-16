import React from "react";
import Img1 from "../public/ig-img-1.jpeg";
import Img2 from "../public/ig-img-2.jpeg";
import Img3 from "../public/ig-img-3.jpeg";
import Img4 from "../public/ig-img-4.jpeg";
import Img5 from "../public/ig-img-5.jpeg";

import InstagramItem from "./InstagramItem";

function Instagram() {
	return (
		<div id="work" className="max-w-[1240px] mx-auto text-center py-24">
			<p className="text-2xl font-bold">Follow Me on Instagram</p>
			<p className="pb-4">@Capture</p>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
				<InstagramItem items={Img1} />
				<InstagramItem items={Img2} />
				<InstagramItem items={Img3} />
				<InstagramItem items={Img4} />
				<InstagramItem items={Img5} />
				<InstagramItem items={Img3} />
			</div>
		</div>
	);
}

export default Instagram;
