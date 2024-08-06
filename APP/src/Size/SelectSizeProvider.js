import React, { useState } from 'react';
import SelectSizeContext from './SelectSizeContext';

const SelectSizeProvider = ({ children }) => {
  const [selectSize, setSelectSize] = useState(15);

  return (
    <SelectSizeContext.Provider value={{ selectSize, setSelectSize }}>
      {children}
    </SelectSizeContext.Provider>
  );
};

export default SelectSizeProvider;