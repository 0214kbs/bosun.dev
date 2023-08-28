import { StyledData, StyledHeader } from "./Table.styled";

const Table = ({ headers, data }: any) => {
	return (
		<div>
			<table style={{ marginLeft: "35px", marginTop: "10px" }}>
				<tbody>
					{data.map((row: any, rowIndex: any) => (
						<tr key={rowIndex}>
							<StyledHeader>{headers[rowIndex]}</StyledHeader>
							<StyledData>{row}</StyledData>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
