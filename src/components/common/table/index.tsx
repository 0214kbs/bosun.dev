import { StyledData, StyledHeader } from "./Table.styled";

interface TableProps {
	headers: (string | string[])[];
	data: (string | string[])[];
}

const Table = ({ headers, data }: TableProps) => {
	return (
		<div>
			<table style={{ marginLeft: "18px", marginTop: "10px" }}>
				<tbody>
					{data.map((row, rowIndex) => (
						<tr key={rowIndex}>
							<StyledHeader>
								{Array.isArray(headers[rowIndex])
									? (headers[rowIndex] as string[]).map((line, lineIndex) => (
											<span key={lineIndex}>
												{line}
												{lineIndex !== headers[rowIndex].length - 1 && <br />}
											</span>
									  ))
									: headers[rowIndex]}
							</StyledHeader>
							<StyledData>
								{Array.isArray(row)
									? row.map((line, lineIndex) => (
											<span key={lineIndex}>
												{line}
												{lineIndex !== row.length - 1 && <br />}
											</span>
									  ))
									: row}
							</StyledData>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
