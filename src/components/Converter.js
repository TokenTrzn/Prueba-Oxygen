import React, { useState } from 'react';
import UnitSelect from './UnitSelect';
import styled from 'styled-components';

const conversions = {
  "km a miles": (value) => (value * 0.621371).toFixed(2),
  "miles a km": (value) => (value / 0.621371).toFixed(2),
  "feet a metres": (value) => (value * 0.3048).toFixed(2),
  "metres a feet": (value) => (value / 0.3048).toFixed(2),
  "centimeter a inches": (value) => (value * 0.393701).toFixed(2),
  "inches a centimetres": (value) => (value / 0.393701).toFixed(2),
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  border-radius: 15px;
  background-color: #2E0039;
  padding: 0.5rem;
  padding-left: 1rem;
  height: 30vh;
  width: 100vh
`;

const ConversionResult = styled.div`
  margin-left: 6rem;
  font-size: 1.5rem;
  color: white;
`;

const TransparentButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
`;

const TitleH2 = styled.h2`
  color: white;
  font-size: 1.5rem;
`;

const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const StyledInput = styled.input`
  background-color: #2E0039;
  color: white;
  padding: 0.5rem;
  font-size: 1rem;
  border: none;
  border-bottom: 2px solid white;
  appearance: none; 
  margin-left: auto;
  &:focus {
    outline: none;
  }
`;

const StyledResult = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 1rem;
  width:100%;
`

const StyledHeart = styled.div`
  font-size: 1.5rem;
  color: white;
`

function Converter({ saveConversion }) {
  const [unitType, setUnitType] = useState("km → miles");
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (!isNaN(value) && value.trim() !== "") {
      setResult(conversions[unitType](parseFloat(value)));
    } else {
      setResult("");
    }
  };

  const handleSwap = () => {
    const invertedConversion = unitType.split(' a ').reverse().join(' a ');
    setUnitType(invertedConversion);
    setInputValue(result);
    setResult(inputValue);
  };

  const handleSave = () => {
    saveConversion({ unitType, inputValue, result });
    setInputValue("");
    setResult("");
  };

  

  return (
    <Container>
        <TitleH2>convert</TitleH2>
        <InputRow>
          <UnitSelect unitType={unitType} setUnitType={setUnitType} />
          <TransparentButton onClick={handleSwap}>⇄</TransparentButton>
          <StyledInput
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Ingresa el valor"
          />
        </InputRow>
        <StyledResult>
          <TransparentButton onClick={handleSave}><StyledHeart>♡</StyledHeart></TransparentButton>
          {result && <ConversionResult>{result}</ConversionResult>}
        </StyledResult>
    </Container>
  );
}

export default Converter;