import styled from "styled-components";
import { MapPin } from "lucide-react";

function DemographicsComponent() {
  return (
    <Container>
      <h4>Joseph Tucker</h4>
      <p>Male, 56 yo</p>
      <p>ACS Protocol</p>
      <MapPin /> Room 424
    </Container>
  );
}

export default DemographicsComponent;

const Container = styled.div`
  background-color: #f9f9fa;
  outline: 1px solid lightgray;
  padding: 16px 10px 25px;
  line-height: 0.8rem;
  /* color: gray; */
  color: #404040;
  box-shadow: 0px 10px 5px lightgray;

  h4 {
    color: #3f75b0;
  }
  p {
    margin: 10px;
  }

  border-top-left-radius: 0.2rem;
  border-bottom-left-radius: 0.2rem;
`;
