import { FunctionComponent } from '../index';
/**
 * Memoize a component, so that it only updates when the props actually have
 * changed. This was previously known as `React.pure`.
 */
export declare function memo<P = {}>(c: FunctionComponent<P>, comparer?: (prev: P, next: P) => boolean): FunctionComponent<P>;
