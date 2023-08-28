import type { Meta, StoryObj } from "@storybook/react";
import Table from "./index";

const meta = {
	title: "Components/Table",
	component: Table,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		headers: {
			description: "table 왼쪽 부분 (행의 첫번째 열)",
		},
		data: {
			description: "table 오른쪽 부분 (header에 해당하는 데이터)",
		},
	},
	args: {},
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicTable: Story = {
	args: {
		headers: ["Name", "Email"],
		data: ["Bosun", "214kbs@gmail.com"],
	},
};
