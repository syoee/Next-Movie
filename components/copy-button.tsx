"use client";

import clipboard from "../styles/copy-button.module.css";

export const copyToClipboard = async (text: string) => {
	try {
		await navigator.clipboard.writeText(text);
		alert("클립보드에 복사되었습니다.");
	} catch (err) {
		console.error("텍스트를 클립보드에 복사하는데 실패했습니다.", err);
	}
};

const CopyButton = ({ text }: { text: string }) => {
	return (
		<button className={clipboard.button} onClick={() => copyToClipboard(text)}>
			{text}
		</button>
	);
};

export default CopyButton;
