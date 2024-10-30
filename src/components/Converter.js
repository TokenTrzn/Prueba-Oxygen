// src/components/Converter.js
import React, { useState } from 'react';
import UnitSelect from './UnitSelect';
import styled from 'styled-components';

const conversions = {
  "Kilómetros a Millas": (value) => (value * 0.621371).toFixed(2),
  "Millas a Kilómetros": (value) => (value / 0.621371).toFixed(2),
  "Pies a Metros": (value) => (value * 0.3048).toFixed(2),
  "Metros a Pies": (value) => (value / 0.3048).toFixed(2),
  "Centímetros a Pulgadas": (value) => (value * 0.393701).toFixed(2),
  "Pulgadas a Centímetros": (value) => (value / 0.393701).toFixed(2),
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 1rem;
  border-radius: 15px;
  background-color: #2E0039;
  height: 150px;
`;

const ConversionResult = styled.div`
  font-size: 1.5rem;
  color: #333;
`;

function Converter({ saveConversion }) {
  const [unitType, setUnitType] = useState("Kilómetros a Millas");
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
        <h2>convert</h2>
      <UnitSelect unitType={unitType} setUnitType={setUnitType} />
      <button onClick={handleSwap}>⇄</button>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Ingresa el valor"
      />
      {result && <ConversionResult>Resultado: {result}</ConversionResult>}
      <button onClick={handleSave}>❤️</button>
    </Container>
  );
}

export default Converter;
