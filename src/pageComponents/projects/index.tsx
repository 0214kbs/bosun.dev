"use client";
import Projectcard from "@/components/projectcard";
import { StyledContainer, StyledTitle, StyledText } from "./Projects.styled";

const ProjectPage = () => {
	return (
		<StyledContainer>
			<StyledTitle>Projects</StyledTitle>
			<StyledText style={{ textAlign: "center" }}>공유하고 싶거나 다시 보고 싶은 기술들을 정리합니다.</StyledText>

			<div style={{ marginTop: "40px", display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
				<Projectcard
					title="SSS(Special Survey Service)"
					date="2023.07.28~2023.08.18 (6명)"
					imgsrc="/projects/sss.png"
					content="공정한 설문 조사 유도 서비스입니다. "
					stacks={["/stack/nextjs.svg", "/stack/react.svg", "/stack/typescript.svg", "/stack/styledcomponents-color.svg"]}
					gitlink="https://github.com/0214kbs/trip"
					postlink="/"
				/>
				<Projectcard
					title="Trip"
					date="2023.05.16~2023.05.26 (2명)"
					imgsrc="/projects/enjoytrip.png"
					content="여행 일정을 계획하는 웹 프로젝트입니다. "
					stacks={["/stack/vue.svg", "/stack/spring-color.svg", "/stack/mysql-color.svg"]}
					gitlink="https://github.com/0214kbs/trip"
					postlink="/"
				/>
				<Projectcard
					title="Trip"
					date="2023.05.16~2023.05.26 (2명)"
					imgsrc="/projects/enjoytrip.png"
					content="여행 일정을 계획하는 웹 프로젝트입니다. "
					stacks={["/stack/vue.svg", "/stack/spring-color.svg", "/stack/mysql-color.svg"]}
					gitlink="https://github.com/0214kbs/trip"
					postlink="/"
				/>
				<Projectcard
					title="Trip"
					date="2023.05.16~2023.05.26 (2명)"
					imgsrc="/projects/enjoytrip.png"
					content="여행 일정을 계획하는 웹 프로젝트입니다. "
					stacks={["/stack/vue.svg", "/stack/spring-color.svg", "/stack/mysql-color.svg"]}
					gitlink="https://github.com/0214kbs/trip"
					postlink="/"
				/>
			</div>
		</StyledContainer >
	);
};

export default ProjectPage;
