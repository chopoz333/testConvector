import styled from "styled-components";

const Index = () => {


  return (
    <Container>
      <InputFieldContainer>
        <p>Введите значение для конвертации:</p>
        <InputField type="text"/>
      </InputFieldContainer>
      <InputFieldContainer>
        <p>Результат:</p>
        <InputField type="text"/>
      </InputFieldContainer>
      <Convert>Convert</Convert>
    </Container>
  )
}

const Container = styled.div`
  text-align: center;
  padding: 10px;
`;

const InputFieldContainer = styled.div`
`;

const InputField = styled.input`
  border: gray 1px solid;
  border-radius: 5px;
  outline: none;
  padding: 8px 15px 8px 15px;
  width: 300px;
`;

const Convert = styled.button`
  margin-top: 15px;
  background-color: white;
  border: gray 1px solid;
  width: 80px;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #b0aeae; 
  }

  &:active {
    background-color: gray;
  }
`;


export default Index;