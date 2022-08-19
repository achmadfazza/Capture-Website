import "../styles/globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Meta from "../components/Meta";
import LoadingSpinner from "../components/LoadingSpinner";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
	const [loading, setLoading] = useState(true);

	const preloading = () => {
		setTimeout(() => {
			setLoading(false);
		}, 1000);
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
