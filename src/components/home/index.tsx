"use client";

import { StyledTableTitle } from "./Home.styled";
import Profile from "../../components/home/profile";
import Table from "@/components/common/table";
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
		<div>
			<Profile />
			<div style={{ display: "flex", maxWidth: "860px", minWidth: "620px", paddingLeft: "10px", gap: "10px" }}>
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
		</div>
	);
}

export default HomePage;
