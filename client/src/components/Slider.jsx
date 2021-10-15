import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: coral;
  position: relative;
`;

const Arrow = styled.div`
  width: 40px;
  height: 40px;
  background-color: #e4e4e463;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: ${(props) => props.direction === "right" && "10px"};
  left: ${(props) => props.direction === "left" && "10px"};
  margin: auto;
  cursor: pointer;
`;

const Slider = () => {
  return (
    <Container>
      <Arrow direction="right">
        <span class="material-icons">east</span>
      </Arrow>
      <Arrow direction="left">
        <span class="material-icons">west</span>
      </Arrow>
    </Container>
  );
};

export default Slider;
