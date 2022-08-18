import "../styles/globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Meta from "../components/Meta";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Meta />
			<Navigation />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
