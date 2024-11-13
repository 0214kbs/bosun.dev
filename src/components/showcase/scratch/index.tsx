"use client";
import useScratchHook from "@/hooks/useScratchHook";
import { useEffect } from "react";

interface ScratchProps {
	beforeImage: string; // 스크래치 이미지
	afterImage: string; // 스크래치 배경 이미지
	onScratchComplete?: () => void; // 스크래치 완료 시 실행할 콜백
	width?: string; // 캔버스 너비
	height?: string; // 캔버스 높이
}

const Scratch = ({ beforeImage, afterImage, onScratchComplete, width = "600px", height = "400px" }: ScratchProps) => {
	const { canvasRef, mouseDown, canvasOpacity, erase, isCanvasLoaded } = useScratchHook(beforeImage, true);

	useEffect(() => {
		if (isCanvasLoaded && onScratchComplete) {
			onScratchComplete();
		}
	}, [isCanvasLoaded, onScratchComplete]);

	return (
		<div style={{ position: "relative" }}>
			<div>
				<div style={{ width: width, height: height, display: "inline-flex", position: "relative" }}>
					{isCanvasLoaded && (
						<div style={{ position: "absolute", zIndex: "0" }}>
							<img src={afterImage} alt="scratch-background" style={{ width: width, height: height }} />
						</div>
					)}
					<canvas
						ref={canvasRef}
						width={width}
						height={height}
						onMouseDown={() => {
							mouseDown.current = true;
						}}
						onMouseUp={() => {
							mouseDown.current = false;
						}}
						onMouseMove={erase}
						style={{ position: "absolute", left: "0", top: "0", cursor: "pointer", transition: "opacity 0.3s", opacity: canvasOpacity }}
					/>
				</div>
			</div>
		</div>
	);
};

export default Scratch;
