import React from 'react';
import SavedConversion from './SavedConversion';

const ConversionList = ({ conversions, deleteConversion }) => (
  <div>
    <h2>saved</h2>
    <ul>
      {conversions.map((conversion, index) => (
        <SavedConversion
          key={index}
          index={index}
          conversion={conversion}
          deleteConversion={deleteConversion}
        />
      ))}
    </ul>
  </div>
);

export default ConversionList;
