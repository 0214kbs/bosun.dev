import Button from "@/components/common/button";
import theme from "@/styles/DefaultTheme";

interface Category {
	title: string;
	keyword: string;
}

interface TagListProps {
	categories: Category[];
	select: string;
	onSelect: (keyword: string) => void;
}

const TagList = ({ categories, select, onSelect }: TagListProps) => {
	return (
		<div style={{ marginTop: "40px", display: "flex" }}>
			{categories.map((category) => (
				<div style={{ margin: "5px", width: "140px" }} key={category.keyword}>
					<Button
						label={category.title}
						bgcolor={select === category.keyword ? theme.colors.main : "white"}
						onClick={() => onSelect(category.keyword)}
						color="black"
					/>
				</div>
			))}
		</div>
	);
};

export default TagList;
