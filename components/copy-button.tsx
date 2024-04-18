import React from "react";

const CopyButton = (text: string) => {
	const copyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(text);
		} catch (err) {
			console.error("텍스트를 클립보드에 복사하는데 실패했습니다.", err);
		}
	};

	return <button onClick={copyToClipboard}>{text}</button>;
};

export default CopyButton;
