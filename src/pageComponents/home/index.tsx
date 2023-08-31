"use client";

import theme from "@/styles/DefaultTheme";
import { StyledContainer, StyledTableTitle, StyledText, StyledTitle } from "./Home.styled";
import Profile from "./components/profile";
import Table from "@/components/table";
import {
	ContanctHeader,
	ContactData,
	CertHeader,
	CertData,
	ExpHeader,
	ExpData,
	EduHeader,
	EduData,
	AwardHeader,
	AwardData,
	EngExpHeader,
	EngExpData,
} from "@/data/aboutme";

function HomePage() {
	return (
		<StyledContainer>
			<StyledTitle> About Me </StyledTitle>
			<StyledText>Bosun Kwak에 대한 간단한 소개입니다.</StyledText>
			<Profile />
			<div style={{ display: "flex", width: "780px", paddingLeft: "10px", gap: "10px" }}>
				<div style={{ width: "48%" }}>
					<StyledTableTitle> 📞Contact</StyledTableTitle>
					<Table headers={ContanctHeader} data={ContactData} />
					<StyledTableTitle>🧾Certificate</StyledTableTitle>
					<Table headers={CertHeader} data={CertData} />
					<StyledTableTitle> 👩🏻‍🏫Experience </StyledTableTitle>
					<Table headers={ExpHeader} data={ExpData} />
				</div>
				<div style={{ width: "48%" }}>
					<StyledTableTitle> 🎓Education</StyledTableTitle>
					<Table headers={EduHeader} data={EduData} />
					<StyledTableTitle>🏆Award</StyledTableTitle>
					<Table headers={AwardHeader} data={AwardData} />
					<StyledTableTitle>🌏English Experience </StyledTableTitle>
					<Table headers={EngExpHeader} data={EngExpData} />
				</div>
			</div>
		</StyledContainer>
	);
}

export default HomePage;
