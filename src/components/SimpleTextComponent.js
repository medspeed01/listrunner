import styled from "styled-components";
import { MapPin } from "lucide-react";

function SimpleTextComponent() {
  const handleKeyDown = (event) => {
    console.log("User pressed: ", event.key);
    if (event.key === "Enter") {
      // 👇️ your logic here
      console.log("Enter key pressed ✅");
    }
  };

  return (
    <Container>
      <textarea onKeyDown={handleKeyDown}>Pancreatite alcoólica</textarea>
    </Container>
  );
}

export default SimpleTextComponent;

const Container = styled.div`
  background-color: #ffffff;
  outline: 1px solid lightgray;
  border-left: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  box-shadow: 0px 10px 5px lightgray;

  padding: 16px 16px;
  line-height: 0.8rem;
  textarea {
    width: 100%;
    height: 100%;
    outline: 0px;
    resize: none;
    border: 0px;
    color: #404040;
  }
`;
