import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import DemographicsComponent from "./components/DemographicsComponent";
import SimpleTextComponent from "./components/SimpleTextComponent";

function GridApp() {
  return (
    <div className="App">
      <Background>
        <Header>Patient List</Header>
        <Grid>
          <GridCell>Demographics</GridCell>
          <GridCell>Diagnosis</GridCell>
          <GridCell>Comorbidities</GridCell>
          <GridCell>Labs & Exams</GridCell>
          <GridCell>Plan</GridCell>

          <DemographicsComponent />
          <SimpleTextComponent />
          <SimpleTextComponent />
          <SimpleTextComponent />
          <SimpleTextComponent />
          <DemographicsComponent />
          <SimpleTextComponent />
          <SimpleTextComponent />
          <SimpleTextComponent />
          <SimpleTextComponent />
        </Grid>
      </Background>
    </div>
  );
}

export default GridApp;

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #fafafb;
  box-sizing: border-box;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  height: 3rem;
  padding-top: 1.5rem;
  padding-left: 2rem;
  font-size: 1.3rem;
  font-weight: bold;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-template-rows: auto auto;
  margin-left: 5rem;
  margin-right: 5rem;

  /* outline: 1px solid red; */
  row-gap: 20px;
  /* grid-auto-flow: column; */

  div:nth-child(n + 2) {
    border-left: 0px;
  }
  div:nth-child(1) {
    border-top-left-radius: 0.2rem;
    border-bottom-left-radius: 0.2rem;
  }
  div:nth-child(5) {
    border-top-right-radius: 0.2rem;
    border-bottom-right-radius: 0.2rem;
  }
  /* div:nth-child(5n-4) {
    outline: 3px solid purple;
  } */
`;

const GridCell = styled.div`
  padding: 1rem 1rem 1rem;
  border: 1px solid gray;
  /* color: gray; */
  color: #404040;
  text-align: center;
  background-color: #ffffff;
  font-weight: bold;
`;

const Separator = styled.div`
  background-color: red;
  min-height: 200px;
`;
