"use client";
import Projectcard from "@/components/projectcard";
import { StyledContainer, StyledTitle, StyledText } from "./Projects.styled";

const ProjectPage = () => {
	return (
		<StyledContainer>
			<StyledTitle>Projects</StyledTitle>
			<StyledText style={{ textAlign: "center" }}>공유하고 싶거나 다시 보고 싶은 기술들을 정리합니다.</StyledText>

			<div style={{ marginTop: "40px" }}>
				<Projectcard
					title="Trip"
					date="2023.08.28~2023.08.29(6인 3일)"
					imgsrc="/projects/enjoytrip.png"
					content="여행 일정을 계획하는 웹 프로젝트입니다. "
					stacks={["/stack/vue.svg", "/stack/spring-color.svg", "/stack/mysql-color.svg"]}
					gitlink="https://github.com/0214kbs/trip"
					postlink="/"
				></Projectcard>
			</div>
		</StyledContainer >
	);
};

export default ProjectPage;
