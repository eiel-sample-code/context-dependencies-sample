// @flow
import { useContext } from 'react';
import { ContextObject } from './context';

export default function ContextConsumer(): string {
    const { isSpecial } = useContext(ContextObject);
    return isSpecial ? 'special!!!' : 'normal.';
}
