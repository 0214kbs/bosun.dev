export interface ButtonStyles {
	color?: string;
	label?: string;
	bgcolor?: string;

	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	type?: "button" | "submit" | "reset";
	style?: React.CSSProperties;
}
