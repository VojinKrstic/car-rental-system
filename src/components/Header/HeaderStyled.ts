import styled from "styled-components";

export const HeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;

  .title-container {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    gap: 10px;
    .title {
      font-family: ${(props) => props.theme.font.family.sansSerif};
      font-size: 24px;
      font-weight: bold;
    }
  }

  ${(props) => props.theme.responsive.min.lg} {
    flex-direction: row-reverse;
    align-items: flex-start;
    padding: 28px 72px;
    .title-container {
      justify-content: normal;
      flex: none;
    }
    .phone-container {
      display: flex;
      gap: 12px;
    }
  }
`;
