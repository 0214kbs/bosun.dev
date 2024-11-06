"use client";
import Projectcard from "@/components/common/projectcard";
import { StyledProjectcardContainer } from "./Projects.styled";
import { projects } from "@/data/projects";

const ProjectPage = () => {
	return (
		<div>
			<StyledProjectcardContainer>
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
			</StyledProjectcardContainer>
		</div>
	);
};

export default ProjectPage;
