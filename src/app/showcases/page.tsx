import PageTitle from "@/components/common/pagetitle";
import ShowCaseList from "@/components/showcase";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Project Page",
	description: "Bosun Kwak의 컴포넌트 모음 입니다. ",
	authors: [{ name: "BosunKwak", url: "https://bosun-dev.vercel.app/" }],
};

export default function Showcases() {
	return (
		<div style={{ maxWidth: "1030px", margin: "auto", padding: "0 8px", paddingTop: "6.5rem" }}>
			<PageTitle title="Showcases" text="개발한 컴포넌트 모음입니다. "></PageTitle>
			<ShowCaseList />
		</div>
	);
}
