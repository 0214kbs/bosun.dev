interface ShowCaseItem {
	title: string;
	des: string;
	imgsrc: string;
	slug: string;
	project: string;
}

export const showcase_items: ShowCaseItem[] = [
	{
		title: "scratch",
		des: "설문조사서비스에서 당첨 여부를 확인할 때, 복권 긁는 듯한 효과를 주기 위해 만들었습니다.",
		imgsrc: "/scratch/scratch.png",
		slug: "scratch",
		project: "SSS",
	},
	{
		title: "carousel",
		des: "설문조사서비스에서 캐러셀을 라이브러리 없이 직접 구현하였습니다.",
		imgsrc: "/carousel/carousel.png",
		slug: "carousel",
		project: "SSS",
	},
];
