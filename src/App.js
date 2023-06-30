import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Background>
        <Header>Patient List</Header>
        <Titles>
          <DemographicsFirst>Demographics</DemographicsFirst>
          <Demographics>Diagnosis</Demographics>
          <Demographics>Comorbidities</Demographics>
          <Demographics>Labs & Exams</Demographics>
          <Demographics>Treatment Plan</Demographics>
        </Titles>
        <Fields>
          <DemographicsField>
            <h3>David Simon</h3>
            <p>Male, 43 yo</p>
          </DemographicsField>
        </Fields>
      </Background>
    </div>
  );
}

export default App;

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  //  background-color: #f9f9f9;
  background-color: #fafafb;
  box-sizing: border-box;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  height: 3rem;
  //background-color: red;
  padding-top: 1.5rem;
  padding-left: 2rem;
  font-size: 1.3rem;
  font-weight: bold;
`;

const Titles = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 3rem;
`;
const Demographics = styled.div`
  color: gray;
  padding: 1rem 3rem 1rem;
  //  background-color: pink;
  border: 1px solid gray;
  border-left: 0px;
`;
const DemographicsFirst = styled.div`
  color: gray;
  padding: 1rem 3rem 1rem;
  //  background-color: pink;
  border: 1px solid gray;
`;

const Fields = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 3rem;
`;

const DemographicsField = styled.div`
  padding: 10px;
  h3 {
    color: #3f75b0;
  }
`;
