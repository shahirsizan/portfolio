import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import { SiLeetcode } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";

export const Contact = () => {
	return (
		<footer className={styles.container} id="contact">
			<div className={styles.text}>
				<h2>Contact Details</h2>
			</div>

			<ul className={styles.links}>
				<li className={styles.link}>
					<img
						src={getImageUrl("contact/emailIcon.png")}
						alt="Email icon"
					/>
					shahir.sizan18@gmail.com
				</li>

				<li className={styles.link}>
					<img
						src={getImageUrl("contact/linkedinIcon.png")}
						alt="LinkedIn icon"
					/>
					<a href="https://www.linkedin.com/in/shahir-adil-sizan/">
						linkedin.com/in/shahir-adil-sizan
					</a>
				</li>

				<li className={styles.link}>
					<img
						src={getImageUrl("contact/githubIcon.png")}
						alt="Github icon"
					/>
					<a href="https://github.com/shahirsizan">
						github.com/shahirsizan
					</a>
				</li>

				<li className={styles.link}>
					<SiLeetcode style={{ fontSize: "50px" }} />
					<a href="https://leetcode.com/u/user8526sJ/">
						leetcode.com/u/user8526sJ/
					</a>
				</li>

				<li className={styles.link}>
					<SiCodeforces style={{ fontSize: "50px" }} />
					<a href="https://codeforces.com/profile/u125">
						codeforces.com/profile/u125
					</a>
				</li>
			</ul>
		</footer>
	);
};
