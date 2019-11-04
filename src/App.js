// @flow
import React from 'react';
import { ContextObject } from './context';
import ContextConsumer from './ContextConsumer';
import type { ContextValueType } from "./context";

const contextValue: ContextValueType = { isSpecial: true };

function App() {
  return (
      <ContextObject.Provider value={contextValue}>
        <ContextConsumer />
      </ContextObject.Provider>
  );
}

export default App;
