import styled from "styled-components";

const StyledLink = styled.div`
    width: 100%;
    margin: 2.4rem 0;

    &:hover {
        transform: translateX(-0.375rem);
    }
    
    `;

const StyledDate = styled.div`
    font-family: ${(props) => props.theme.fonts.HangeulFontSemiBold};
    font-size: 0.75rem;
    color: #9CA3AF;
    `;

const StyledTitle = styled.div`
    font-family: ${(props) => props.theme.fonts.HangeulFontSemiBold};
    font-size: 1.5rem;
    margin-top: 0.5rem;
    color:black;

    &:hover{
        color:${(props) => props.theme.colors.main};
    }
`;

const StyledDescription = styled.div`
    font-family: ${(props) => props.theme.fonts.HangeulFontRegular};

    font-size: 1.2rem;
    color: #6B7280;
    margin-top: 0.25rem;
`;

export { StyledLink, StyledDate, StyledTitle, StyledDescription };
