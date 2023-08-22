import ProjectPage from "@/pageComponents/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Project Page",
	description: "Bosun Kwak의 프로젝트 모음 입니다. ",
	authors: [{ name: "BosunKwak", url: "https://bosun-dev.vercel.app/" }],
};

export default function Projects() {
	return <ProjectPage />;
}
