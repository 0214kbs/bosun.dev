import PageTitle from "@/components/common/pagetitle";
import ProjectPage from "@/pageComponents/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Project Page",
	description: "Bosun Kwak의 프로젝트 모음 입니다. ",
	authors: [{ name: "BosunKwak", url: "https://bosun-dev.vercel.app/" }],
};

export default function Projects() {
	return (
		<div style={{ maxWidth: "1030px", margin: "auto", padding: "0 8px", paddingTop: "6.5rem" }}>
			<PageTitle title="Projects" text="진행한 프로젝트 모음입니다."></PageTitle>
			<ProjectPage />
		</div>
	);
}
