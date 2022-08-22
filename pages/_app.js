import "../styles/globals.css";
import Meta from "../components/Meta";
import LoadingSpinner from "../components/LoadingSpinner";
import React, { useEffect, useState } from "react";
import * as gtag from "../lib/gtag";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	const [loading, setLoading] = useState(true);

	const preloading = () => {
		setTimeout(() => {
			setLoading(false);
		}, 1500);
	};

	useEffect(() => {
		preloading();
		const handleRouteChange = (url) => {
			gtag.pageview(url);
		};
		router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);

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
