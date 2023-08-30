"use client";
import Projectcard from "@/components/projectcard";
import { StyledContainer, StyledTitle, StyledText } from "./Projects.styled";

const ProjectPage = () => {
	return (
		<StyledContainer>
			<StyledTitle>Projects</StyledTitle>
			<StyledText style={{ textAlign: "center" }}>진행한 프로젝트 모음입니다. </StyledText>
			<div style={{ marginTop: "40px", display: "flex", justifyContent: "flex-start", flexWrap: "wrap", gap: "15px" }}>
				<Projectcard
					title="Bosun Kwak's blog"
					date="2023.08.21 ~ 진행중 (1명)"
					imgsrc="/projects/blogmain.png"
					content="저만의 블로그 및 포트폴리오 입니다.  "
					stacks={["/stack/nextjs.svg", "/stack/react.svg", "/stack/typescript.svg", "/stack/styledcomponents-color.svg", "/stack/storybook-color.svg", "/stack/node.svg"]}
					gitlink="https://github.com/0214kbs/bosun.dev"
					link="https://bosun-dev.vercel.app/"
				/>
				<Projectcard
					title="SSS(Special Survey Service)"
					date="2023.07.28 ~ 2023.08.18 (6명)"
					imgsrc="/projects/sss.png"
					content="공정한 설문 조사 유도 서비스입니다. "
					stacks={["/stack/nextjs.svg", "/stack/react.svg", "/stack/typescript.svg", "/stack/styledcomponents-color.svg", "/stack/node.svg"]}
					link="https://sss-azure.vercel.app/"
					gitlink="https://github.com/0214kbs/SSS"
				/>
				<Projectcard
					title="Design System"
					date="2023.07.11 ~ 진행중 (1명)"
					imgsrc="/projects/designsystem.PNG"
					content="storybook을 이용해 시각적, 기능적 컴포넌트 및 가이드라인을 정의한 Design System 입니다. "
					stacks={["/stack/nextjs.svg", "/stack/react.svg", "/stack/typescript.svg", "/stack/styledcomponents-color.svg", "/stack/storybook-color.svg", "/stack/node.svg"]}
					gitlink="https://github.com/0214kbs/design-system"
				/>
				<Projectcard
					title="Trip"
					date="2023.05.16 ~ 2023.05.26 (2명)"
					imgsrc="/projects/enjoytrip.png"
					content="여행 일정을 계획하는 웹 프로젝트입니다. "
					stacks={["/stack/vue.svg", "/stack/spring-color.svg", "/stack/mysql-color.svg"]}
					gitlink="https://github.com/0214kbs/trip"
				/>
				<Projectcard
					title="개집사"
					date="2021.07.26 ~ 2021.08.07 (5명)"
					imgsrc="/projects/dogapp.png"
					content="반려견을 두고 외출해야하는 사람들을 위한 동네 강아지 산책 서비스입니다. "
					stacks={["/stack/swift-color.svg", "/stack/firebase-color.svg", "/stack/xcode-color.svg"]}
					gitlink="https://github.com/0214kbs/Gaejibsa-chatting"
				/>
			</div>
		</StyledContainer >
	);
};

export default ProjectPage;
