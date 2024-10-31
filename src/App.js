import React, { useState } from 'react';
import Converter from './components/Converter';
import ConversionList from './components/ConversionList';
import styled from 'styled-components';

const Header = styled.header`
  background-color: white;
  color: #2E0039;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  width: 100%;
`;

const Footer = styled.div`
  background-color: #2E0039;
  color: white;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 300;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 4%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  min-height: 100%;
`;


const MainContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Divider = styled.hr`
  background-color: #d7d7d7;
  height: 2px;
  width: 100%;
  border: none;
`;
function App() {
  const [savedConversions, setSavedConversions] = useState([]);

  const saveConversion = (conversion) => {
    setSavedConversions([...savedConversions, conversion]);
  };

  const deleteConversion = (index) => {
    setSavedConversions(savedConversions.filter((_, i) => i !== index));
  };
  
  return (
    <Container>
      <MainContent>
      <Header>⇄ unit converter</Header>
        <Divider></Divider>
        <Converter saveConversion={saveConversion} />
        <ConversionList conversions={savedConversions} deleteConversion={deleteConversion} />
      </MainContent>
      <Footer>
        <span style={{ margin: '0 20px'}}>Terms of service</span>
        <span style={{ margin: '0 20px'}}>Privacy policy</span>
      </Footer>
    </Container>
  );
}

export default App;