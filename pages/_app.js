import "../styles/globals.css";
import Navigation from "../components/Navigation";
import Meta from "../components/Meta";
import LoadingSpinner from "../components/LoadingSpinner";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
	const [loading, setLoading] = useState(true);

	const preloading = () => {
		setTimeout(() => {
			setLoading(false);
		}, 1500);
	};

	useEffect(() => {
		preloading();
	});

	return (
		<>
			<Meta />
			{loading ? (
				<LoadingSpinner />
			) : (
				<>
					<Component {...pageProps} />
				</>
			)}
		</>
	);
}

export default MyApp;
