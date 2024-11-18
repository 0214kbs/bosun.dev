import { StyledData, StyledHeader } from "./Table.styled";

const Table = ({ headers, data }: any) => {
	return (
		<div>
			<table style={{ marginLeft: "18px", marginTop: "10px" }}>
				<tbody>
					{data.map((row: any, rowIndex: any) => (
						<tr key={rowIndex}>
							<StyledHeader>
								{Array.isArray(headers[rowIndex])
									? headers[rowIndex].map((line: any, lineIndex: any) => (
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
