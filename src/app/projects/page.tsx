import PageTitle from "@/components/common/pagetitle";
import Projectcard from "@/components/common/projectcard";
import { Metadata } from "next";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
	title: "Project Page",
	description: "Bosun Kwak의 프로젝트 모음 입니다. ",
	authors: [{ name: "BosunKwak", url: "https://bosun-dev.vercel.app/" }],
};

export default function Projects() {
	return (
		<div style={{ maxWidth: "1030px", margin: "auto", padding: "0 8px", paddingTop: "6.5rem" }}>
			<PageTitle title="Projects" text="진행한 프로젝트 모음입니다."></PageTitle>
			<div style={{ marginTop: "40px", display: "flex", justifyContent: "flex-start", flexWrap: "wrap", gap: "15px" }}>
				{projects.map((project) => (
					<Projectcard
						key={project.title}
						title={project.title}
						date={project.date}
						imgsrc={project.imgsrc}
						content={project.content}
						stacks={project.stacks}
						gitlink={project.gitlink}
						link={project.link}
						postlink={project.postlink}
					/>
				))}
			</div>
		</div>
	);
}
