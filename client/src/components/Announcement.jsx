import styled from "styled-components";

const Container = styled.div`
  height: 38px;
  background-color: teal;
  color: white;
  font-size: 1rem;
  font-weight: 300;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

const Announcement = () => {
  return <Container>Winter Deal! Free Shipping on Orders Over $50</Container>;
};

export default Announcement;
