import React from 'react';
import styled from 'styled-components';

const ConversionItem = styled.li`
  display: flex;
  flex-direction: row;
  border: 15px;
  background-color: #e3e3e3;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
  padding: 0.5rem;
  width: 45vw;
  border-radius: 15px;
  color: #959595
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #868686;
  cursor: pointer;
`;

const SavedConversion = ({ conversion, deleteConversion, index }) => (
  <ConversionItem>
    <span>
      {conversion.inputValue} {conversion.unitType.split(' a ')[0]} → {conversion.result} {conversion.unitType.split(' a ')[1]}
    </span>
    <DeleteButton onClick={() => deleteConversion(index)}>x</DeleteButton>
  </ConversionItem>
);

export default SavedConversion;
