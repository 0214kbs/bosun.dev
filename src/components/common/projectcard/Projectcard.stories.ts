import type { Meta, StoryObj } from "@storybook/react";
import Projectcard from "./index";

const meta = {
	title: "Components/Projectcard",
	component: Projectcard,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		title: {
			description: "Project 제목",
		},
		date: {
			description: "Project 진행기간(인원수)",
		},
		imgsrc: {
			description: "Project에 해당하는 이미지 경로",
		},
		content: {
			description: "Project에 대한 간단한 설명 1줄 ",
		},
		stacks: {
			description: "Project에서 사용한 기술 스택 리스트",
		},
		gitlink: {
			description: "Project 관련 코드 (github link)",
		},
		link: {
			description: "Project 배포 링크",
		},
		postlink: {
			description: "Project 관련 게시글 및 ppt 링크",
		},
	},
	args: {},
} satisfies Meta<typeof Projectcard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic_Project_Card: Story = {
	args: {
		title: "Project Test",
		date: "2023.08.28~2023.08.29(6인 3일)",
		imgsrc: "/bosun.png",
		content: "test입니다.",
		stacks: ["nextjs", "react"],
		gitlink: "https://github.com/0214kbs",
	},
};
