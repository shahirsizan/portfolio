import React from "react";

import styles from "./Certifications.module.css";
import certifications from "../../data/certification.json";
import { getImageUrl } from "../../utils";

export const Certifications = () => {
	return (
		<section className={styles.container} id="certifications">
			<h2 className={styles.title}>Certifications</h2>
			<div className={styles.content}>
				<ul className={styles.history}>
					{certifications.map((certification, id) => {
						return (
							<li key={id} className={styles.historyItem}>
								<a
									href={`${certification.link}`}
									target="_blank"
								>
									<img
										src={getImageUrl(
											certification.imageSrc
										)}
									/>
									<div className={styles.historyItemDetails}>
										<h3>{`${certification.name} `}</h3>
										<h4>{`${certification.organisation}`}</h4>
									</div>
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
};
