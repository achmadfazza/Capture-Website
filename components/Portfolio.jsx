import Image from "next/image";
import React from "react";

function Portfolio() {
	return (
		<div>
			<h1>Travel Photos</h1>
			<div>
				<div>
					<Image
						src="https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80"
						alt="images"
						layout="responsive"
						width="100%"
						height="100%"
					/>
				</div>
			</div>
		</div>
	);
}

export default Portfolio;
