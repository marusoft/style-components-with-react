import styled from "styled-components";

export const FooterWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.footer};
  color: #fff;
  padding: 100px 0 60px;
  ul {
    list-style-type: none;
  }
  ul li {
    margin-bottom: 20px;
  }
  p {
    text-align: right;
  }
  @media (max-width: ${({ theme }) => theme.mobiles.md}) {
    text-align: center;
    ul {
      padding: 0;
    }
    p {
      text-align: center;
    }
  }
`;
