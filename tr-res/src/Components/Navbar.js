import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
    height: 50px;
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const LeftSide = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
const RightSide = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`;

const Center = styled.div`
    flex: 1;
`;
const AppName = styled.h1`
    margin: 0;
    padding: 0;
    font-weight: bolder;
    text-align: center;
`
const Items = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 30px;
`
const Navbar = () => {
  return (
  <Container>
      <Wrapper>
          <LeftSide>
          </LeftSide>
          <Center>
        <AppName>
         TRAIN RESERVATION PORTAL
        </AppName>
          </Center>
          <RightSide>
              <Items>SIGN UP</Items>
              <Items>LOG IN</Items>
          </RightSide>
      </Wrapper>
  </Container>)
};

export default Navbar;
