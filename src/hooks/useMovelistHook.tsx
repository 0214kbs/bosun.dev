import { useState, useEffect } from "react";

interface UseMovelistHookProps {
	cards: string[];
	cardWidth: number;
	gapWidth: number;
	carouselWidth: number;
}

const useMovelistHook = ({ cards, cardWidth, gapWidth, carouselWidth }: UseMovelistHookProps) => {
	const totalCardWidth = cardWidth + gapWidth;
	const maxTransform = Math.min(0, -(totalCardWidth * cards.length - carouselWidth));
	const minTransform = 0;
	const [transformValue, setTransformValue] = useState(minTransform);

	useEffect(() => {
		if (transformValue < maxTransform) {
			setTransformValue(maxTransform);
		}
		if (transformValue > minTransform) {
			setTransformValue(minTransform);
		}
	}, [transformValue, maxTransform, minTransform]);

	function handlePrevClick() {
		setTransformValue((prevValue) => {
			const newValue = prevValue + totalCardWidth;
			return newValue > minTransform ? minTransform : newValue;
		});
	}

	function handleNextClick() {
		setTransformValue((prevValue) => {
			const newValue = prevValue - totalCardWidth;
			return newValue < maxTransform ? maxTransform : newValue;
		});
	}

	return {
		transformValue,
		handlePrevClick,
		handleNextClick,
	};
};

export default useMovelistHook;
