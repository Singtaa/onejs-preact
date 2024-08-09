import { ComponentChild, FunctionalComponent, Ref } from '../index';
export declare const REACT_FORWARD_SYMBOL: number | symbol;
interface ForwardFn<P = {}, T = any> {
    (props: P, ref: Ref<T>): ComponentChild;
    displayName?: string;
}
/**
 * Pass ref down to a child. This is mainly used in libraries with HOCs that
 * wrap components. Using `forwardRef` there is an easy way to get a reference
 * of the wrapped component instead of one of the wrapper itself.
 */
export declare function forwardRef<R, P = {}>(fn: ForwardFn<P, R>): FunctionalComponent<Omit<P, 'ref'> & {
    ref?: Ref<R>;
}>;
export {};
