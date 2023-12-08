"use client";
import Projectcard from "@/components/common/projectcard";
import { StyledContainer, StyledTitle, StyledText, StyledProjectcardContainer } from "./Projects.styled";
import { projects } from "@/data/projects";

const ProjectPage = () => {
	return (
		<StyledContainer>
			<StyledTitle> Projects</StyledTitle>
			<StyledText>진행한 프로젝트 모음입니다.</StyledText>
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
		</StyledContainer>
	);
};

export default ProjectPage;
