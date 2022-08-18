import Hero from "../components/Hero";
import Instagram from "../components/Instagram";
import Slider from "../components/Slider";
import { SliderData } from "../components/SliderData";

export default function Home() {
	return (
		<div>
			<Hero
				heading="Capture Photography"
				message="I Capture a Moments in Nature and Keep Them Alive."
			/>
			<Slider slides={SliderData} />
			<Instagram />
		</div>
	);
}
