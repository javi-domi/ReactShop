import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
  background-color: #f3f3f3;
  align-items: center;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 1rem;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  padding: 4px;
  margin-left: 25px;
  display: flex;
  align-items: center;
  border: 1px solid black;
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  padding: 4px;
  outline: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 1rem;
  cursor: pointer;
  margin-left: 25px;
`;
const CounterBadge = styled.span`
  font-size: 14px;
  font-weight: 600;
`;

const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input type="text" />
            <span className="material-icons">search</span>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Teressa.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN-IN</MenuItem>
          <MenuItem>
            <span class="material-icons">
              shopping_bag<CounterBadge>2</CounterBadge>
            </span>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
