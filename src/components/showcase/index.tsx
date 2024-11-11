"use client";

import { useState } from "react";
import { showcase_tags } from "@/data/category";
import { showcase_items } from "@/data/showcases";
import TagList from "@/components/common/taglist";
import ShowCaseCard from "../common/showcasecard";

function ShowCaseList() {
	const [select, setSelect] = useState<string>("");
	const handleSelect = (keyword: string) => {
		setSelect(keyword);
	};

	const filteredItems = showcase_items.filter((item) => select === "" || item.project === select);

	return (
		<>
			<TagList categories={showcase_tags} select={select} onSelect={handleSelect} />

			<div style={{ marginTop: "40px", display: "flex", justifyContent: "flex-start", flexWrap: "wrap", gap: "15px" }}>
				{filteredItems.map((item) => (
					<ShowCaseCard key={item.slug} title={item.title} des={item.des} imgsrc={item.imgsrc} slug={item.slug} />
				))}
			</div>
		</>
	);
}

export default ShowCaseList;
