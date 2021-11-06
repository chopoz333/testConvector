import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { selectRates } from "../../reducer/converter/selector";
import { getRate } from "../../reducer/converter/action";
import InputField from "../../components/InputField";

const Converter = () => {
  const dispatch = useDispatch();

  const language = window.navigator.language;

  const [value, setValue] = useState();
  const [convertedValue, setConvertedValue] = useState();
  const [selectedRate, setSelectedRate] = useState(language);
  const [showRatesList, setShowRatesList] = useState(false);

  const {
    data: rates,
    isLoading: ratesIsLoading,
  } = useSelector(selectRates, shallowEqual);

  const convert = () => {
    if (selectedRate === "ru") setConvertedValue((value / rates.USD.Value).toFixed(3));
    if (selectedRate === "en") setConvertedValue((value * rates.USD.Value).toFixed(3));
  };

  useEffect(() => {
    dispatch(getRate());
  }, [dispatch]);

  useEffect(() => {
    if (value) convert();
  }, [selectedRate, value]);

  return (
    <Container>
      <p>Select basic currency:</p>
      <input
        type="radio"
        name="rate"
        onChange={() => setSelectedRate("ru")}
      />
      <label>RUB</label>
      <input
        type="radio"
        name="rate"
        onChange={() => setSelectedRate("en")}
      />
      <label>USD</label>
      <InputContainer>
        <InputField
          type="number"
          label="Enter the value:"
          placeholder="Enter the value"
          onChange={e => setValue(e.target.value)}
          onKeyClick={convert}
          disabled={ratesIsLoading}
        />
      </InputContainer>
      <OutputContainer>
        <InputField
          type="number"
          label="Result:"
          placeholder="Result"
          value={convertedValue}
          disabled
        />
      </OutputContainer>
      <Button onClick={() => setShowRatesList(true)}>Show exchange rates</Button>
      {showRatesList &&
        Object.entries(rates).map((item, index) => (
          <p key={index}>{`${item[1].CharCode} - ${item[1].Value}`}</p>
        ))
      }
    </Container>
  )
}

const Container = styled.div`
  text-align: center;
  padding: 10px;
`;

const InputContainer = styled.div``;
const OutputContainer = styled.div``;
const Button = styled.button`
background-color: white;
  border: Silver 1px solid;
  border-radius: 5px;
  height: 30px;
  margin: 15px 10px 0 10px;
  
  &:hover{
    background-color: Silver;
  }
  
  &:active{
    background-color: gray; 
  }
`;

export default Converter;