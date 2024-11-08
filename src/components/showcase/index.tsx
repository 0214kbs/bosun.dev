"use client";

import { useState } from "react";
import { showcase_tags } from "@/data/category";
import TagList from "@/components/common/taglist";

function ShowCaseList() {
	const [select, setSelect] = useState<string>("");
	const handleSelect = (keyword: string) => {
		setSelect(keyword);
	};

	return (
		<>
			<TagList categories={showcase_tags} select={select} onSelect={handleSelect} />

			<div style={{ marginTop: "40px", display: "flex", justifyContent: "flex-start", flexWrap: "wrap", gap: "15px" }}>
				{/* TODO : ShowCase Card */}
			</div>
		</>
	);
}

export default ShowCaseList;
