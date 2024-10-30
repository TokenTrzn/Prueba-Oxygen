import React, { useState } from 'react';
import Converter from './components/Converter';
import ConversionList from './components/ConversionList';
import styled from 'styled-components';

const AppContainer = styled.div`
  max-width: 500px;
  margin: auto;
  padding: 1rem;
`;

 const Title = styled.h1`
    color: #2E0039;
    font-size: 1rem;
  `
  const Divider = styled.hr`
    color: #d7d7d7;
    height: 2.px;
    width: 100%;
    margin: 10px auto
  `
function App() {
  const [savedConversions, setSavedConversions] = useState([]);

  const saveConversion = (conversion) => {
    setSavedConversions([...savedConversions, conversion]);
  };

  const deleteConversion = (index) => {
    setSavedConversions(savedConversions.filter((_, i) => i !== index));
  };

 


  return (
    <AppContainer>
      <Title>⇄ unit converter</Title>
      <Divider/>
      <Converter saveConversion={saveConversion} />
      <ConversionList conversions={savedConversions} deleteConversion={deleteConversion} />
    </AppContainer>
  );
}

export default App;