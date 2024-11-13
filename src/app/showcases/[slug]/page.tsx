"use client";
import PageTitle from "@/components/common/pagetitle";
import Carousel from "@/components/showcase/caresoul";
import Scratch from "@/components/showcase/scratch";
import { showcase_items } from "@/data/showcases";
import { usePathname } from "next/navigation";

export default function ShowCasePage() {
	const slug = usePathname().split("/").pop();
	const currentItem = showcase_items.find((item) => item.slug === slug);

	let componentToShow;
	switch (slug) {
		case "scratch":
			componentToShow = <Scratch beforeImage="/scratch/before_scratch.png" afterImage="/scratch/after_scratch.png" />;
			break;
		case "carousel":
			componentToShow = <Carousel cardWidth={440} gapWidth={40} title="바다 이미지" />;
			break;
		default:
			componentToShow = <div> 다시 돌아가주세요..</div>;
	}

	return (
		<div style={{ height: `calc(100vh - 215px)`, paddingTop: "6.5rem" }}>
			<PageTitle title={currentItem?.title || "404"} text={currentItem?.des || "페이지를 찾을 수 없습니다."}></PageTitle>
			<div style={{ flex: 1, height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>{componentToShow}</div>
		</div>
	);
}
