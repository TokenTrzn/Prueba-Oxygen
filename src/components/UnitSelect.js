import React from 'react';
import styled from 'styled-components';


const StyledSelect = styled.select`
  background-color: #2E0039;
  color: white;
  padding: 0.5rem;
  font-size: 1rem;
  border: none;
  border-bottom: 2px solid white;
  appearance: none; 
  &:focus {
    outline: none;
  }
`;

const UnitSelect = ({ unitType, setUnitType }) => (
  <StyledSelect 
  value={unitType} 
  onChange={(e) => setUnitType(e.target.value)}>
    <option value="km a miles">km → miles</option>
    <option value="miles a km">miles → km</option>
    <option value="feet a metres">feet → metres</option>
    <option value="metres a feet">metres → feet</option>
    <option value="centimeter a inches">centimeter → inches</option>
    <option value="inches a centimetres">inches → centimetres</option>
  </StyledSelect>
);

export default UnitSelect;
