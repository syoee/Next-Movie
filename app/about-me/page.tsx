import CopyButton from "../../components/copy-button";
import self from "../../styles/about-me.module.css";

export const metadata = {
	title: "About me",
};

export default function AboutMe() {
	return (
		<div className={self.container}>
			<img
				className={self.img}
				src="https://velog.velcdn.com/images/syo_ee/profile/b936a920-2162-4e2f-b849-11d4b3db181c/image.jpeg"
				alt="my-img"
			/>
			<div>
				<h1 className={self.title}>About me</h1>
				<ul className={self.info}>
					<li>
						<p>🐱 Github</p>
						<a href="https://github.com/syoee" target="_blank">
							https://github.com/syoee
						</a>
					</li>
					<li>
						<p>📑 Blog</p>
						<a href="https://velog.io/@syo_ee" target="_blank">
							https://velog.io/@syo_ee
						</a>
					</li>
					<li>
						<p>📧 E-mail</p>
						<CopyButton text="seonyong717@gmail.com" />
					</li>
				</ul>
			</div>
		</div>
	);
}
