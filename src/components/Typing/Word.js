import styled from "styled-components";

const StyledSpan = styled.span`
  margin: 0.3rem;
`;

const Word = (props) => {
  return <StyledSpan className={props.validation}>{props.char}</StyledSpan>;
};

export default Word;
