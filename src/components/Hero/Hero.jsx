import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
	return (
		<section className={styles.container}>
			<div className={styles.content}>
				<h1 className={styles.title}>Shahir Adil Sizan</h1>
				<p className={styles.description}>
					A CS Undergraduate experienced in both frontend and backend
					web technologies.
				</p>
			</div>
			<img
				src={getImageUrl("hero/bg-removed_IMG_4377.png")}
				alt="Hero image of me"
				className={styles.heroImg}
			/>
			<div className={styles.topBlur} />
		</section>
	);
};
