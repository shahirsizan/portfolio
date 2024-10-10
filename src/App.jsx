import styles from "./App.module.css";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Certifications } from "./components/Certifications/Certifications";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";

function App() {
	return (
		<div className={styles.App}>
			<Navbar />
			<Hero />
			<Experience />
			<Certifications />
			{/* <Projects /> */}
			<Contact />
		</div>
	);
}

export default App;
