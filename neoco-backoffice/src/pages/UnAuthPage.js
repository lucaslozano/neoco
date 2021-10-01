import React from "react";
import styled from "styled-components";
import { responsive } from "bluejay-ui";

const { mediaQuery } = responsive;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  background-color: ${({ theme }) => theme.backgroundColor};
  ${mediaQuery.TABLET`
    flex-direction: row;
  `};
`;

const Box = styled.div`
  padding: 50px 10%;
`;

const UnAuthPage = ({ children }) => {
  return (
    <Container>
      <Box>{children}</Box>
    </Container>
  );
};

export default UnAuthPage;
