import React from 'react';
import SavedConversion from './SavedConversion';
import styled from 'styled-components';

const StyledH2 = styled.h2`
  color: #676767;
  text-align: start;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 5rem;
`;

const SavedConversionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: start;
  border-radius: 15px;
  background-color: white;
  padding: 0.5rem;
  height: 30vh;
  width: 100vh
`;

const ConversionList = ({ conversions, deleteConversion }) => (
    <SavedConversionDiv>
      <StyledH2>saved</StyledH2>
      {conversions.map((conversion, index) => (
        <SavedConversion
          key={index}
          index={index}
          conversion={conversion}
          deleteConversion={deleteConversion}
        />
      ))}
    </SavedConversionDiv>
);

export default ConversionList;
