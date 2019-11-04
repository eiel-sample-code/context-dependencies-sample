// @flow
import { useContext } from 'react';
import { ContextObject } from './App';

export default function ContextConsumer(): string {
    const { isSpecial } = useContext(ContextObject);
    return isSpecial ? 'special!!!' : 'normal.';
}
