"use client";

import theme from "@/styles/DefaultTheme";
import { StyledContainer, StyledTableTitle, StyledText, StyledTitle } from "./Home.styled";
import Profile from "./components/profile";
import Table from "@/components/table";

function HomePage() {
	const ContanctHeader = ["Phone", "Email"];
	const ContactData = ["010-7603-5659", "214kbs@gmail.com"];

	const CertHeader = ["2021. 12", "2022.02", "2022.03"];
	const CertData = ["SQL 개발자 자격증 취득", "TOEIC 860점", "TOEIC SPEAKING IH level"];

	const ExpHeader = [["2021", " ~2022"], "2022", "2022", "2021", "2019", "2019"];
	const ExpData = [
		["학부 연구생", "- 암호 Database 질의 연산 기술 연구"],
		"코딩 동아리 스터디장으로서 활동",
		"WISA 2022 컨퍼런스 참가",
		"과 학생회 기획부장",
		"대지중학교 방과후 코딩반 수업 운영 및 지도하는 봉사활동 ",
		"과 학생회 사무부장",
	];

	const EduHeader = ["2023.01 ~ ing", "2022.08~2022.12", "2019.03~2023.02", "2015.03~2018.02"];
	const EduData = ["SSAFY(삼성 청년 SW 아카데미)", "TABA (Tmax Tibero, CCCR 협력 프로그램) ", "단국대학교 모바일시스템공학과", "한성여자고등학교"];

	const AwardHeader = ["2022.12"];
	const AwardData = ["TABA 우수교육생 "];

	const EngExpHeader = ["2022.07", "2021", "2019"];
	const EngExpData = ["체코 Brno 대학에서 Machine Learning 프로그램 수료", "1년간 유학생 멘토", "Global Village : 방학 기간에 유학생들과 수업 진행 "];
	return (
		<StyledContainer>
			<StyledTitle> About Me </StyledTitle>
			<StyledText>Bosun Kwak에 대한 간단한 소개입니다.</StyledText>
			<Profile />
			<div style={{ display: "flex", width: "780px", paddingLeft: "10px" }}>
				<div style={{ width: "50%" }}>
					<StyledTableTitle> 👩‍💻Contact</StyledTableTitle>
					<Table headers={ContanctHeader} data={ContactData} />
					<StyledTableTitle>🧾Certificate</StyledTableTitle>
					<Table headers={CertHeader} data={CertData} />
					<StyledTableTitle> 👩🏻‍🏫Experience </StyledTableTitle>
					<Table headers={ExpHeader} data={ExpData} />
				</div>
				<div style={{ width: "50%" }}>
					<StyledTableTitle> 🎓Education</StyledTableTitle>
					<Table headers={EduHeader} data={EduData} />
					<StyledTableTitle>🏆Award</StyledTableTitle>
					<Table headers={AwardHeader} data={AwardData} />
					<StyledTableTitle>✈️English Experience </StyledTableTitle>
					<Table headers={EngExpHeader} data={EngExpData} />
				</div>
			</div>
		</StyledContainer>
	);
}

export default HomePage;
