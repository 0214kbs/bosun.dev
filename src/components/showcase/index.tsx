"use client";

import { useState } from "react";
import { showcase_tags } from "@/data/category";
import TagList from "@/components/common/taglist";
import ShowCaseCard from "../common/showcasecard";

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
				<ShowCaseCard
					title="scratch"
					des="설문조사서비스에서 당첨 여부를 확인할 때, 복권 긁는 듯한 효과를 주기 위해 만들었습니다. "
					imgsrc="/bosun.png"
					slug="scratch"
				/>
			</div>
		</>
	);
}

export default ShowCaseList;
