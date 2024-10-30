import React from 'react';
import styled from 'styled-components';

const ConversionItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border-bottom: 1px solid #ccc;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: red;
  cursor: pointer;
`;

const SavedConversion = ({ conversion, deleteConversion, index }) => (
  <ConversionItem>
    <span>
      {conversion.inputValue} {conversion.unitType.split(' a ')[0]} = {conversion.result} {conversion.unitType.split(' a ')[1]}
    </span>
    <DeleteButton onClick={() => deleteConversion(index)}>❌</DeleteButton>
  </ConversionItem>
);

export default SavedConversion;
