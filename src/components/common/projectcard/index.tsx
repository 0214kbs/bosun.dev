import Link from "next/link"
import { StyledProjectcard, StyledDate, StyledPrjTitle, StyledContentBox, StyledLinkItem, StyledLinkName } from "./Projectcard.styled"
import { ProjectcardProps } from "./Projectcard.type"

const Projectcard = (props: ProjectcardProps) => {
    return (
        <StyledProjectcard>
            <img src={props.imgsrc} alt="projectsimg" style={{ width: "290px", height: "180px", borderRadius: "1rem" }} />
            <div style={{ display: "flex", flexDirection: "column" }}>
                <StyledDate> {props.date} </StyledDate>
                <StyledPrjTitle>{props.title}</StyledPrjTitle>
            </div>
            <StyledContentBox>{props.content}</StyledContentBox>
            <div style={{ display: "flex", gap: "10px" }}>
                {props.stacks.map((item, index) => (
                    <img key={index} src={item} alt={`stack-${index}`} style={{ width: "25px" }} />
                    // <StyledStack key={index}>{item}</StyledStack>
                ))}
            </div>
            <div style={{ display: "flex", gap: "12px" }}>
                {props.link && <Link href={props.link} style={{ textDecoration: 'none', color: "black", display: "flex" }}>
                    <StyledLinkItem>
                        <img src="/link.png" style={{ width: "20px", height: "20px", marginRight: "5px" }}></img>
                        <StyledLinkName>바로가기</StyledLinkName>
                    </StyledLinkItem>
                </Link>}
                {props.gitlink && <Link href={props.gitlink} style={{ textDecoration: 'none', color: "black", display: "flex" }}>
                    <StyledLinkItem>
                        <img src="/github.png" style={{ width: "20px", height: "20px", marginRight: "5px" }}></img>
                        <StyledLinkName>Github</StyledLinkName>
                    </StyledLinkItem>
                </Link>}
                {props.postlink && <Link href={props.postlink} style={{ textDecoration: 'none', color: "black", display: "flex" }}>
                    <StyledLinkItem>
                        <img src="/post.png" style={{ width: "20px", height: "20px", marginRight: "5px" }}></img>
                        <StyledLinkName>관련 포스트</StyledLinkName>
                    </StyledLinkItem>
                </Link>}
            </div>
        </StyledProjectcard >
    )
}

export default Projectcard