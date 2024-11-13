import { useEffect, useState } from "react";
import Image from "next/image";
import useMovelistHook from "@/hooks/useMovelistHook";
import { StyledHead, StyledCaresoulTitle, StyledButton } from "./Caresoul.styled";

interface CarouselProps {
	cardWidth: number; // 카드의 너비
	gapWidth: number; // 카드 사이의 간격
	title: string; // 캐러셀 제목
}

const Carousel = ({ cardWidth, gapWidth, title }: CarouselProps) => {
	const cards = Array.from({ length: 9 }, (_, index) => `/carousel/${index + 1}.png`);

	const [carouselWidth, setCarouselWidth] = useState(0);
	useEffect(() => {
		const updateCarouselWidth = () => setCarouselWidth(window.innerWidth * 0.8);
		updateCarouselWidth();
		window.addEventListener("resize", updateCarouselWidth);
		return () => window.removeEventListener("resize", updateCarouselWidth);
	}, []);

	const { transformValue, handlePrevClick, handleNextClick } = useMovelistHook({
		cards,
		cardWidth,
		gapWidth,
		carouselWidth,
	});

	return (
		<div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
			<StyledHead>
				<StyledButton onClick={handlePrevClick}>&lt;</StyledButton>
				<StyledCaresoulTitle> 캐러셀 제목: {title}</StyledCaresoulTitle>
				<StyledButton onClick={handleNextClick}>&gt;</StyledButton>
			</StyledHead>

			<div style={{ width: "80vw", overflow: "hidden" }}>
				<div
					style={{
						display: "flex",
						gap: `${gapWidth}px`,
						transform: `translateX(${transformValue}px)`,
						transition: "transform 0.3s ease-out",
					}}
				>
					{cards &&
						cards.map((src, index) => (
							<div key={index}>
								<Image src={src} alt={`image-${index + 1}`} width={cardWidth} height={300} objectFit="cover" />
							</div>
						))}
				</div>
			</div>
		</div>
	);
};

export default Carousel;
