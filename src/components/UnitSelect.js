import React from 'react';

const UnitSelect = ({ unitType, setUnitType }) => (
  <select value={unitType} onChange={(e) => setUnitType(e.target.value)}>
    <option value="Kilómetros a Millas">Kilómetros a Millas</option>
    <option value="Millas a Kilómetros">Millas a Kilómetros</option>
    <option value="Pies a Metros">Pies a Metros</option>
    <option value="Metros a Pies">Metros a Pies</option>
    <option value="Centímetros a Pulgadas">Centímetros a Pulgadas</option>
    <option value="Pulgadas a Centímetros">Pulgadas a Centímetros</option>
  </select>
);

export default UnitSelect;
