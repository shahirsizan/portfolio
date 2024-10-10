import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import { IoMail } from "react-icons/io5";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
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
					<IoMail />
					shahir.sizan18@gmail.com
				</li>

				<li className={styles.link}>
					<FaLinkedin />
					<a href="https://www.linkedin.com/in/shahir-adil-sizan/">
						linkedin.com/in/shahir-adil-sizan
					</a>
				</li>

				<li className={styles.link}>
					<FaGithub />

					<a href="https://github.com/shahirsizan">
						github.com/shahirsizan
					</a>
				</li>

				<li className={styles.link}>
					<SiLeetcode />
					<a href="https://leetcode.com/u/user8526sJ/">
						leetcode.com/u/user8526sJ/
					</a>
				</li>

				<li className={styles.link}>
					<SiCodeforces />
					<a href="https://codeforces.com/profile/u125">
						codeforces.com/profile/u125
					</a>
				</li>
			</ul>
		</footer>
	);
};
