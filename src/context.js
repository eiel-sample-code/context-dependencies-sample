// @flow
import { createContext } from 'react';

export type ContextValueType = {
    isSpecial: boolean;
}

const defaultValue: ContextValueType = { isSpecial: false };
export const ContextObject = createContext<ContextValueType>(defaultValue);
