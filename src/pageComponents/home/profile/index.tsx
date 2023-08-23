import theme from "@/styles/DefaultTheme";
import { StyledImg, StyledRight, StyledText } from "./Profile.styled";

function Profile() {
	return (
		<section>
			<h1 style={{ fontFamily: theme.fonts.HangeulFontMedium, fontSize: theme.fontSizes.large, textAlign: "center" }}> About Me </h1>
			<div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
				<StyledImg src="/profile.jpg" alt="profile" />
				<StyledRight>
					<div>
						<StyledText style={{ fontWeight: "bold" }}>👋🏻 끊임없이 성장하고, 프론트엔드 전문성을 깊게 추구합니다.</StyledText>
						<StyledText style={{ color: "gray", marginLeft: "15px", padding: "10px" }}>
							모든 도전을 새로운 학습의 기회로 받아들이며, 프론트엔드 분야의 최신 트렌드와 기술에 항상 집중하고 있습니다.
							<br />
							<br />
							이를 바탕으로 더욱 전문적인 개발자로 성장하기 위한 지속적인 노력을 기울이고 있습니다.
						</StyledText>
					</div>
					<div>
						<StyledText style={{ fontWeight: "bold" }}>✈️ 여행을 좋아합니다.</StyledText>
						<StyledText style={{ marginLeft: "15px", padding: "10px", color: "gray" }}>
							현재까지 다녀온 나라
							<span style={{ color: theme.colors.gray, fontFamily: theme.fonts.HangeulFontRegular }}>
								{" "}
								Guam, Hawaii, Italy, Czech Republic, Austria, Canada, United States
							</span>
						</StyledText>
					</div>
				</StyledRight>
			</div>
		</section>
	);
}

export default Profile;
