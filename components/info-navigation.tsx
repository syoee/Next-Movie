"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
	const path = usePathname();
	return (
		<nav className={styles.nav}>
			<ul>
				<li>
					<div>test1</div>
				</li>
				<li>
					<div>test3</div>
				</li>
			</ul>
		</nav>
	);
}
