// @flow
import React, { createContext } from 'react';
import ContextConsumer from './ContextConsumer';

export type ContextValueType = {
    isSpecial: boolean;
}

const defaultValue: ContextValueType = { isSpecial: false };
export const ContextObject = createContext<ContextValueType>(defaultValue);

const contextValue: ContextValueType = { isSpecial: true };

function App() {
  return (
      <ContextObject.Provider value={contextValue}>
        <ContextConsumer />
      </ContextObject.Provider>
  );
}

export default App;
