import {Fragment} from "react";
import Nav from "../components/Nav";
import "../styles/normalize.css";
import "../styles/globals.scss";
import "../styles/globals.css";

function MyApp({Component, pageProps}) {
	return (
		<Fragment>
			<Nav />
			<Component {...pageProps} />
		</Fragment>
	);
}

export default MyApp;
